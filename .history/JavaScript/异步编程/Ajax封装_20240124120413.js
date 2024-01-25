function myAjax(url, success, fail) {
  // 创建XMLHttpRequest对象
  let xmlhttp;
  if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // 兼容IE5、IE6浏览器
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  // 2. 发送请求
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // 3. 注册onreadystatechange时间，处理服务器响应
  xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      let obj = JSON.parse(xmlhttp.responseText);
      console.log("数据返回成功：",obj);
      success && success(xmlhttp.responseText);
    } else {
      fail && fail(new Error("接口请求失败"))
    }
  }
}

// 调用 myAjax
myAjax("a.json", (res) => {
  console.log(res);
})