System.config({
  baseURL: "./assets",
  defaultJSExtensions: true,
  map: {},
  packages: {
    'babel-polyfill': {
      main: 'polyfill.min.js'
    },
    bootstrap: {
      main: 'js/bootstrap.min.js'
    },
    'dat-gui': {
      main: 'index.js'
    },
    lodash: {
      main: 'index.js'
    },
    jquery: {
      main: 'dist/jquery.min.js'
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
    react: {
      main: 'dist/react.min.js'
    },
    'react-dom': {
      main: 'dist/react-dom.min.js'
    },
    'react-router': {
      main: 'umd/ReactRouter.min.js'
    },
    'react-router-bootstrap': {
      main: 'lib/index.js'
    },
    'react-bootstrap': {
      main: 'dist/react-bootstrap.min.js'
    },
    echarts: {
      main: 'echarts.js'
    },
    zrenderjs: {
      main: 'zrender.js'
    }
  }
});
