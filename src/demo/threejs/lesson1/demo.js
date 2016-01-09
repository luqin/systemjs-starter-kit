import 'three.js';
import 'threejs-OrbitControls';
import Stats from 'stats.js';
import $ from 'jquery';

/**
 *
 * WebGL With Three.js - Lesson 1
 * http://www.script-tutorials.com/webgl-with-three-js-lesson-1/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

var colors = [
  0xFF62B0,
  0x9A03FE,
  0x62D0FF,
  0x48FB0D,
  0xDFA800,
  0xC27E3A,
  0x990099,
  0x9669FE,
  0x23819C,
  0x01F33E,
  0xB6BA18,
  0xFF800D,
  0xB96F6F,
  0x4A9586
];
var particleLight;

var lesson1 = {
  scene: null,
  camera: null,
  renderer: null,
  container: null,
  controls: null,
  clock: null,
  stats: null,

  init: function (container) { // Initialization

    // create main scene
    this.scene = new THREE.Scene();

    var SCREEN_WIDTH = $(container).innerWidth(),
      SCREEN_HEIGHT = window.innerHeight - 100;

    // prepare camera
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.scene.add(this.camera);
    this.camera.position.set(-1000, 1000, 0);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // prepare renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.setClearColor(0xffffff);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMapSoft = true;

    // prepare container
    this.container = container;
    this.container.appendChild(this.renderer.domElement);

    // events
    // THREEx.WindowResize(this.renderer, this.camera);

    // prepare controls (OrbitControls)
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0, 0, 0);

    // prepare clock
    this.clock = new THREE.Clock();

    // prepare stats
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.bottom = '0px';
    this.stats.domElement.style.zIndex = 10;
    this.container.appendChild(this.stats.domElement);

    // add directional light
    var dLight = new THREE.DirectionalLight(0xffffff);
    dLight.position.set(1, 1000, 1);
    dLight.castShadow = true;
    dLight.shadowCameraVisible = true;
    dLight.shadowDarkness = 0.2;
    dLight.shadowMapWidth = dLight.shadowMapHeight = 1000;
    this.scene.add(dLight);

    // add particle of light
    particleLight = new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x44ff44 }));
    Object.assign(particleLight.position, dLight.position);
    this.scene.add(particleLight);

    // add simple ground
    var groundGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    var ground = new THREE.Mesh(groundGeometry, new THREE.MeshLambertMaterial({
      color: this.getRandColor()
    }));
    ground.position.y = 0;
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // add circle shape
    var circle = new THREE.Mesh(new THREE.CircleGeometry(70, 50), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    circle.rotation.x = -Math.PI / 2;
    circle.rotation.y = -Math.PI / 3;
    circle.rotation.z = Math.PI / 3;
    circle.position.x = -300;
    circle.position.y = 150;
    circle.position.z = -300;
    circle.castShadow = circle.receiveShadow = true;
    this.scene.add(circle);

    // add cube shape
    var cube = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
    cube.position.x = -300;
    cube.position.y = 150;
    cube.position.z = -100;
    cube.castShadow = cube.receiveShadow = true;
    this.scene.add(cube);

    // add cylinder shape
    var cube = new THREE.Mesh(new THREE.CylinderGeometry(60, 80, 90, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
    cube.position.x = -300;
    cube.position.y = 150;
    cube.position.z = 100;
    cube.castShadow = cube.receiveShadow = true;
    this.scene.add(cube);

    // add extrude geometry shape
    var extrudeSettings = {
      amount: 10,
      steps: 10,
      bevelSegments: 10,
      bevelSize: 10,
      bevelThickness: 10
    };
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(0, -50);
    triangleShape.lineTo(-50, 50);
    triangleShape.lineTo(50, 50);
    triangleShape.lineTo(0, -50);

    var extrude = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    extrude.rotation.y = Math.PI / 2;
    extrude.position.x = -300;
    extrude.position.y = 150;
    extrude.position.z = 300;
    extrude.castShadow = extrude.receiveShadow = true;
    this.scene.add(extrude);

    // add icosahedron shape
    var icosahedron = new THREE.Mesh(new THREE.IcosahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    icosahedron.position.x = -100;
    icosahedron.position.y = 150;
    icosahedron.position.z = -300;
    icosahedron.castShadow = icosahedron.receiveShadow = true;
    this.scene.add(icosahedron);

    // add octahedron shape
    var octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    octahedron.position.x = -100;
    octahedron.position.y = 150;
    octahedron.position.z = -100;
    octahedron.castShadow = octahedron.receiveShadow = true;
    this.scene.add(octahedron);

    // add ring shape
    var ring = new THREE.Mesh(new THREE.RingGeometry(30, 70, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    ring.rotation.y = -Math.PI / 2;
    ring.position.x = -100;
    ring.position.y = 150;
    ring.position.z = 100;
    ring.castShadow = ring.receiveShadow = true;
    this.scene.add(ring);

    // add shape geometry shape
    var shapeG = new THREE.Mesh(new THREE.ShapeGeometry(triangleShape), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    shapeG.rotation.y = -Math.PI / 2;
    shapeG.position.x = -100;
    shapeG.position.y = 150;
    shapeG.position.z = 300;
    shapeG.castShadow = shapeG.receiveShadow = true;
    this.scene.add(shapeG);

    // add sphere shape
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(70, 32, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    sphere.rotation.y = -Math.PI / 2;
    sphere.position.x = 100;
    sphere.position.y = 150;
    sphere.position.z = -300;
    sphere.castShadow = sphere.receiveShadow = true;
    this.scene.add(sphere);

    // add tetrahedron shape
    var tetrahedron = new THREE.Mesh(new THREE.TetrahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    tetrahedron.position.x = 100;
    tetrahedron.position.y = 150;
    tetrahedron.position.z = -100;
    tetrahedron.castShadow = tetrahedron.receiveShadow = true;
    this.scene.add(tetrahedron);

    // add torus shape
    var torus = new THREE.Mesh(new THREE.TorusGeometry(70, 20, 16, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    torus.rotation.y = -Math.PI / 2;
    torus.position.x = 100;
    torus.position.y = 150;
    torus.position.z = 100;
    torus.castShadow = torus.receiveShadow = true;
    this.scene.add(torus);

    // add torus knot shape
    var torusK = new THREE.Mesh(new THREE.TorusKnotGeometry(70, 20, 16, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    torusK.rotation.y = -Math.PI / 2;
    torusK.position.x = 100;
    torusK.position.y = 150;
    torusK.position.z = 300;
    torusK.castShadow = torusK.receiveShadow = true;
    this.scene.add(torusK);

    // add tube shape
    var points = [];
    for (var i = 0; i < 10; i++) {
      var randomX = -100 + Math.round(Math.random() * 200);
      var randomY = -100 + Math.round(Math.random() * 200);
      var randomZ = -100 + Math.round(Math.random() * 200);

      points.push(new THREE.Vector3(randomX, randomY, randomZ));
    }
    var tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.SplineCurve3(points), 64, 20), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
    tube.rotation.y = -Math.PI / 2;
    tube.position.x = 0;
    tube.position.y = 500;
    tube.position.z = 0;
    tube.castShadow = tube.receiveShadow = true;
    this.scene.add(tube);
  },
  getRandColor: function () {
    return colors[Math.floor(Math.random() * colors.length)];
  }
};

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}

// Update controls and stats
function update() {
  lesson1.controls.update(lesson1.clock.getDelta());
  lesson1.stats.update();

  // smoothly move the particleLight
  var timer = Date.now() * 0.000025;
  particleLight.position.x = Math.sin(timer * 5) * 300;
  particleLight.position.z = Math.cos(timer * 5) * 300;
}

// Render the scene
function render() {
  if (lesson1.renderer) {
    lesson1.renderer.render(lesson1.scene, lesson1.camera);
  }
}

// Initialize lesson on page load
function initializeLesson(container) {
  lesson1.init(container);
  animate();
}

const demo = {
  init(container) {
    initializeLesson(container);
  }
};

export default demo;
