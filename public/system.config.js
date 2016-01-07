System.config({
  baseURL: "./assets",
  paths: {
    "*": "*.js"
  },
  defaultJSExtensions: true,
  packages: {
    'bootstrap': {
      main: 'js/bootstrap.js'
    },
    'echarts': {
      main: 'echarts.js'
    },
    'zrenderjs': {
      main: 'zrender.js'
    }
  }
});
