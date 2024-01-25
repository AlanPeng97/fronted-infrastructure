var name = "window.name"

var thisFun = () => {
  console.log(this);
  console.log(this.name);
}

const obj1 ={
  name: "obj1Name",
  sayName: () => thisFun,
}



thisFun();
obj1.sayName;