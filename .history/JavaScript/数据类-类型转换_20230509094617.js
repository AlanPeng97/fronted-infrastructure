console.log(Boolean(undefined)); // false

const result1 = "";
const result2 = { a: "data1", b: "data2" };

if (result1) {
  console.log("因为 result1的内容为空，所以代码进不了这里");
}

if (result2 && result2.a) {
  // 接口返回了 result2，且 result2.a 里面有值，前端才做进一步的事情
  console.log("代码能进来，前端继续在这里干活儿");
}


// * 隐式类型转换：逻辑运算
const a = 1;

console.log(a == true); // true 当非 Boolean 类型的数值和 Boolean 类型的数值做比较时，会先把前者临时进行隐式转换为 Boolean 类型
console.log(typeof a); // number 隐式类型转换不会改变数据类型