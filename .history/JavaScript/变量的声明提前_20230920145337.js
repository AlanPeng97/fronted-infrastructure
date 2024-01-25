foo();

function foo() {
  console.log(i) // undefined
    if (true) {
        var i = 123;
    }
    // console.log(i); // 123
}