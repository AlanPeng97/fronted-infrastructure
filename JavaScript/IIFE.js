let arr = [];
for(let i = 0; i< 5; i++){
  (function (i){
    arr.push(function() {
      console.log(i);
    });
  }) (i)
}

arr[2]();
console.log(arr[1])