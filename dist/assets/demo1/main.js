'use strict';

System.import('./a') // , __moduleName
.then(function (a) {
  console.info('相对路径加载`./a`成功');
}, function (e) {
  console.error('相对路径加载`./a`失败', e);
}).catch(function (e) {
  console.error(e);
});

System.import('demo1/truck').then(function (res) {
  var Truck = res.Truck;

  var truck = new Truck({
    price: 40000, make: 'Ford', model: 'F150',
    year: 2014, is4by4: true
  });
  console.info(truck.getDetails());
  console.info('绝对路径加载`demo1/truck`成功');
}, function (e) {
  console.error('绝对路径加载`demo1/truck`失败', e);
}).catch(function (e) {
  console.error(e);
});

var a = {};
var b = {
  a: 1
};

console.info(Object.assign(a, b));

var arr = [1, 2, 3];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}