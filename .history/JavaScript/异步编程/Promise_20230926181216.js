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