function requestData(url) {
  const promise = new Promise((resolve, reject) => {
    const res = {
      retCode: 0,
      data: 'data',
      errMsg: 'not login'
    };
    setTimeout(() => {
      if(res.retCode == 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    })
  }, 1000);

  return promise;
}

// 调用异步任务
requestData('www.qianguyihao.com/index1').then(data => {
  console.log('异步任务执行成功:', data);
}).catch(err=> {
  console.log('异步任务执行失败:', err);
})

// resolve()传入的参数
const promise2 = new Promise((resolve, reject) => {
  reject('promise2 的 reject');
});
const promise1 = new Promise((resolve, reject) => {
  resolve(promise2)
})



promise1.then(res => {
  console.log('promise1 then');
  console.log(res);
}).catch(err => {
  console.log('promise1 catch');
  console.log(err);
});

// resolve()中传入thenable对象

const promise3 = new Promise((resolve, reject) => {
  // resolve 里传入了一个 thenable 对象，里面有一个 then()方法，then()方法里执行的是 reject()
  resolve({
    name: 'qianguyihao',
    then: (resolve, reject) => {
      // 可以执行 resolve，也可以执行 reject，这里以 reject 为例
      reject('thenable reject');
    },
  });
});

promise3
  .then(res => {
    console.log('qianguyihao then');
    console.log(res);
  })
  .catch(err => {
    console.log('qianguyihao catch');
    console.log(err);
  });