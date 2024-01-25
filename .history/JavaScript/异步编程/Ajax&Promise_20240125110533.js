import {myAjax} from "./Ajax封装";

function promiseA () {
  return new Promise((reslove, reject) => {
    myAjax("www.xxx.com", (res) => {
      if(res.retCode == 0) {
        reslove("request success" + res);
      } else {
        reject({retCode: -1, msg: "network error"})
      }
    })
  });
}

promiseA()
      .then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})