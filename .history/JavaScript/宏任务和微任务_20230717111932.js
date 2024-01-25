      console.log("start");

      setTimeout(function () {
        console.log("setTimeout");
      }, 0);

       new Promise(function (resolve, reject) {
        console.log("new1");
        resolve("产生回调");
      })
        .then(function () {
         
          console.log("promise1111");
        })
        .then(function () {
          console.log("promise222");
        });

      console.log("end");