System.config({
  baseURL: "./assets",
  paths: {
    "*": "*.js"
  },
  defaultJSExtensions: true,
  packages: {
    'bootstrap': {
      main: 'js/bootstrap.min.js'
    },
    'react-router-bootstrap': {
      main: './lib/index.js'
    },
    'three.js': {
      main: './build/three.js'
    },
    'echarts': {
      main: 'echarts.js'
    },
    'zrenderjs': {
      main: 'zrender.js'
    }
  }
});
