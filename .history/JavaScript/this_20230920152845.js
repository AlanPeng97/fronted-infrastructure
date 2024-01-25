const thisFun = () => {
  const name = "thisFun.name";
  console.log(this);
  console.log(this.name);
}

const obj1 ={
  name: "obj1Name",
  sayName: thisFun(),
}

obj1.sayName();