var xmlhttp = new XMLHttpRequest();

//（2）设置请求的参数。包括：请求的方法、请求的url。
xmlhttp.open('get', '02-ajax.php');

//（3）发送请求 （仅用于POST请求）
xmlhttp.send();

//（4）注册事件。 onreadystatechange事件，状态（readyState）改变时就会调用。
// readyState 0: 请求未初始化 1: 服务器连接已建立 2:请求已接收 3:请求处理中 4:请求已完成，且响应已就绪
//如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
xmlhttp.onreadystatechange = function () {
    // 为了保证 数据 完整返回，我们一般会判断 两个值 （readyState等于4， 且状态码为200时， 表示响应已就绪）
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //（5）服务端相应：如果能够进入这个判断，说明数据请求成功了
        // 服务器响应内容： responseText 普通字符串， responseXML XML
        console.log('数据返回成功：' + JSON.stringify(xmlhttp.responseText));

        // 伪代码：按业务需要，将接口返回的内容显示在页面上
        // document.querySelector('h1').innerHTML = xmlhttp.responseText;
    }
};
// * post 请求

//（2）设置请求参数。包括：请求的方法、请求的url。s
xmlhttp.open('post', '02.post.php', true);

// 如果想要使用post提交数据,必须添加此行
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//（3）发送请求
xmlhttp.send('name=fox&age=18');

//（4）注册事件
xmlhttp.onreadystatechange = function () {
    //（5）服务端相应
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
    }
};