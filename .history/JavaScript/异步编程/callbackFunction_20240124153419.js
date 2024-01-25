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