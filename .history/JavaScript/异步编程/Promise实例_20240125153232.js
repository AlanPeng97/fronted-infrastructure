const myPromise = new Promise((resolve, reject) => {
  resolve("resolve");
});

// then() & catch() 都可以链式调用
myPromise.then().then().then();
myPromise.catch().catch().catch();
myPromise.then().catch().then().catch();

// then() & catch() 方法返回Promise对象， 返回的Promise对象的状态取决于回调函数的返回值；
// 进入catch() 方法 1. throw new Error() 2. 抛出reject();

const myPromiseA = new Promise((resolve, reject) => {
  resolve('aaa');
});

myPromiseA
  .then(res => {
    console.log('res1:', res);
    // 抛出异常：相当于 return 一个失败状态的 Promise
    throw new Error('第二个 Promise 执行失败');
    // return new Promise((resolve, reject) => {
    //    reject();
    // });
    // 抛出reject 更常用
  })
  .then(res => {
    console.log('res2:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });

  // 抛出的错误会寻找最近的catch()去执行

const myPromiseB = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled');
});

myPromiseB
  .then(res => {
    console.log('res1:', res);
    // 遇到异常（或者任务失败）后，会找到最近的 catch() 去执行
    throw new Error('not login')
  })
  .then(res => {
    console.log('res2:', res);
  }, err => {
    console.log('err2:', err);
  })
  .catch(err => {
    console.log('err3:', err);
  });