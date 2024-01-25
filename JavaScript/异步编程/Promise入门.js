// 使用Promise 处理异步任务的基本模型

// 封装异步任务
function requestData(url) {
  const promise = new Promise((resolve, reject) => {
    const res = {
      retCode: 0,
      data: 'qiangu yihao`s data',
      errMsg: 'not login',
    };
    setTimeout(() => {
      if (res.retCode == 0) {
        // 网络请求成功
        resolve(res.data);
      } else {
        // 网络请求失败
        reject(res.errMsg);
      }
    }, 1000);


  });
    return promise;
}

// 调用异步任务
requestData("www.xxx.com").then(data => {
  console.log("异步任务执行成功", data);
}).catch(err => {
  console.log("异步任务执行失败", err);
});

