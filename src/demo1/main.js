System.import('./a') // , __moduleName
  .then(a => {
    console.info('相对路径加载`./a`成功', a);
  }, e=> {
    console.error('相对路径加载`./a`失败', e);
  })
  .catch(e => {
    console.error(e);
  });

System.import('demo1/truck')
  .then(res => {
    let { Truck } = res;
    let truck = new Truck({
      price: 40000, make: 'Ford', model: 'F150',
      year: 2014, is4by4: true
    });
    console.info(truck.getDetails());
    console.info('绝对路径加载`demo1/truck`成功');
  }, e=> {
    console.error('绝对路径加载`demo1/truck`失败', e);
  })
  .catch(e => {
    console.error(e);
  });

let a = {};
let b = {
  a: 1,
};

console.info(Object.assign(a, b));

let arr = [ 1, 2, 3 ];

for (let item of arr) {

}
