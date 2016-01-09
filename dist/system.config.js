System.config({
  baseURL: "./assets",
  paths: {
    "*": "*.js"
  },
  defaultJSExtensions: true,
  map: {
    'three.js': 'three.js/build/three.min'
  },
  packages: {
    'bootstrap': {
      main: 'js/bootstrap.min.js'
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
