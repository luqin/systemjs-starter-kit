System.config({
  baseURL: "./assets",
  defaultJSExtensions: true,
  map: {},
  packages: {
    'bootstrap': {
      main: 'js/bootstrap.min.js'
    },
    'dat-gui': {
      main: 'index.js'
    },
    lodash: {
      main: 'index.js'
    },
    'stats.js': {
      main: 'build/stats.min'
    },
    'three.js': {
      main: 'build/three.min'
    },
    'threejs-OrbitControls': {
      main: 'OrbitControls'
    },
    'react-router-bootstrap': {
      main: 'lib/index.js'
    },
    echarts: {
      main: 'echarts.js'
    },
    zrenderjs: {
      main: 'zrender.js'
    }
  }
});
