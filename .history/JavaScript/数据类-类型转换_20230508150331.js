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
