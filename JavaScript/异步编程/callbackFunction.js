// ES5中，使用传统的回调函数，处理异步任务的基本模型

// 封装异步任务
function requestData (url, successCallBack, failureCallBack) {
  const res = {
    retCode: 0,
    data: "success",
    errMsg: "network is error",
  };

  setTimeout(() => {
    if(res.retCode == 0) {
      // 请求成功
      successCallBack(res.data);
    } else {
      // 网络错误
      failureCallBack(res.errMsg);
    }
  },1000);
};

requestData("www.xxxx.com/xxx", res => {
  console.log("异步任务执行成功", res);
}, err => {
  console.log("异步任务执行失败", err);
})