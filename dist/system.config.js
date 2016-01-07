System.config({
  baseURL: "./assets",
  paths: {
    "*": "*.js"
  },
  defaultJSExtensions: true,
  packages: {
    'echarts': {
      main: 'echarts.js'
    },
    'zrenderjs': {
      main: 'zrender.js'
    }
  }
});
