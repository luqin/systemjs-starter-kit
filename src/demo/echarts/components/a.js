console.info('a: ' + new Date().toLocaleString())

define(function (require) {
  setTimeout(() => {
    require(['./b'], function () {
      console.info('AMD加载`./b`成功')
    })
  }, 2000);
});
