System.config({
  baseURL: "./dist",
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
