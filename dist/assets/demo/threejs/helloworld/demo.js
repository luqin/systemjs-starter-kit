'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('three.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var demo = {
  init: function init(container) {
    var width = 1;
    var height = 1;

    function resize() {
      width = (0, _jquery2['default'])(container).innerWidth();
      height = window.innerHeight;
    }

    resize();

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var render = function render() {
      requestAnimationFrame(render);

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    render();
  }
};

exports['default'] = demo;
module.exports = exports['default'];