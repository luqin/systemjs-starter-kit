import 'three.js';
import $ from 'jquery';
import dat from 'dat-gui';
import 'threejs-OrbitControls';
import Stats from 'stats.js';

let gui;

const demo = {

  init(container) {
    var group;
    var controls, stats;
    var particlesData = [];
    var camera, scene, renderer;
    var positions, colors;
    var particles;
    var pointCloud;
    var particlePositions;
    var linesMesh;

    var maxParticleCount = 1000;
    var particleCount = 500;
    var r = 800;
    var rHalf = r / 2;

    var effectController = {
      showDots: true,
      showLines: true,
      minDistance: 150,
      limitConnections: false,
      maxConnections: 20,
      particleCount: 500
    };

    init();
    animate();

    function initGUI() {

      gui = new dat.GUI();

      gui.add(effectController, "showDots").onChange(function (value) {
        pointCloud.visible = value;
      });
      gui.add(effectController, "showLines").onChange(function (value) {
        linesMesh.visible = value;
      });
      gui.add(effectController, "minDistance", 10, 300);
      gui.add(effectController, "limitConnections");
      gui.add(effectController, "maxConnections", 0, 30, 1);
      gui.add(effectController, "particleCount", 0, maxParticleCount, 1).onChange(function (value) {

        particleCount = parseInt(value);
        particles.setDrawRange(0, particleCount);

      });

    }

    function getSize() {
      return {
        width: $(container).innerWidth(),
        height: window.innerHeight - 100
      };
    }

    function init() {

      // initGUI();

      //

      camera = new THREE.PerspectiveCamera(45, getSize().width / getSize().height, 1, 4000);
      camera.position.z = 1750;

      controls = new THREE.OrbitControls(camera, container);

      scene = new THREE.Scene();


      group = new THREE.Group();
      scene.add(group);

      var helper = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(r, r, r)));
      helper.material.color.setHex(0x080808);
      helper.material.blending = THREE.AdditiveBlending;
      helper.material.transparent = true;
      group.add(helper);

      var segments = maxParticleCount * maxParticleCount;

      positions = new Float32Array(segments * 3);
      colors = new Float32Array(segments * 3);

      var pMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false
      });

      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(maxParticleCount * 3);

      for (var i = 0; i < maxParticleCount; i++) {

        var x = Math.random() * r - r / 2;
        var y = Math.random() * r - r / 2;
        var z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // add it to the geometry
        particlesData.push({
          velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
          numConnections: 0
        });

      }

      particles.setDrawRange(0, particleCount);
      particles.addAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setDynamic(true));

      // create the particle system
      pointCloud = new THREE.Points(particles, pMaterial);
      group.add(pointCloud);

      var geometry = new THREE.BufferGeometry();

      geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3).setDynamic(true));
      geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3).setDynamic(true));

      geometry.computeBoundingSphere();

      geometry.setDrawRange(0, 0);

      var material = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      linesMesh = new THREE.LineSegments(geometry, material);
      group.add(linesMesh);

      //

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(getSize().width, getSize().height);

      renderer.gammaInput = true;
      renderer.gammaOutput = true;

      container.appendChild(renderer.domElement);

      //

      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0';
      container.appendChild(stats.domElement);

      window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {

      camera.aspect = getSize().width / getSize().height;
      camera.updateProjectionMatrix();

      renderer.setSize(getSize().width, getSize().height);

    }

    function animate() {

      var vertexpos = 0;
      var colorpos = 0;
      var numConnected = 0;

      for (var i = 0; i < particleCount; i++)
        particlesData[i].numConnections = 0;

      for (var i = 0; i < particleCount; i++) {

        // get the particle
        var particleData = particlesData[i];

        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
          particleData.velocity.y = -particleData.velocity.y;

        if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
          particleData.velocity.x = -particleData.velocity.x;

        if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
          particleData.velocity.z = -particleData.velocity.z;

        if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections)
          continue;

        // Check collision
        for (var j = i + 1; j < particleCount; j++) {

          var particleDataB = particlesData[j];
          if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections)
            continue;

          var dx = particlePositions[i * 3] - particlePositions[j * 3];
          var dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          var dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < effectController.minDistance) {

            particleData.numConnections++;
            particleDataB.numConnections++;

            var alpha = 1.0 - dist / effectController.minDistance;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }


      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;

      pointCloud.geometry.attributes.position.needsUpdate = true;

      requestAnimationFrame(animate);

      stats.update();
      render();

    }

    function render() {

      var time = Date.now() * 0.001;

      group.rotation.y = time * 0.1;
      renderer.render(scene, camera);

    }
  },

  destroy() {
    if (gui) {
      gui.destroy();
    }
  }
};

export default demo;
