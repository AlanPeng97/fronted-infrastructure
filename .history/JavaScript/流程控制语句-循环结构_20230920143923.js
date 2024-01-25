// * label 和 break的配合使用可以跳出循环
outer: for (let i = 0; i < 5; i++) {
  console.log("外层循环 i 的值：" + i);
  for (let j = 0; j < 5; j++) {
    //break outer; // 直接跳出outer所在的外层循环（这个outer是我自定义的label）
    console.log("内层循环 j 的值:" + j);
  }
}
