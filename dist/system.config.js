System.config({
  baseURL: "./assets",
  paths: {
    "*": "*.js"
  },
  defaultJSExtensions: true,
  map: {
    'stats.js': 'stats.js/build/stats.min',
    'three.js': 'three.js/build/three.min',
    'threejs-OrbitControls': 'threejs-OrbitControls/OrbitControls'
  },
  packages: {
    'bootstrap': {
      main: 'js/bootstrap.min.js'
    },
    'lodash': {
      main: 'index.js'
    },
    'react-router-bootstrap': {
      main: 'lib/index.js'
    },
    'echarts': {
      main: 'echarts.js'
    },
    'zrenderjs': {
      main: 'zrender.js'
    }
  }
});
