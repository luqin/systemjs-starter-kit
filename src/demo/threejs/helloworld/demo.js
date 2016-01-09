import 'three.js';
import $ from 'jquery';

const demo = {
  init(container) {
    let width = 1;
    let height = 1;

    function resize() {
      width = $(container).innerWidth();
      height = window.innerHeight;
    }

    resize();

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    container.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var render = function () {
      requestAnimationFrame( render );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    render();
  }
};

export default demo;
