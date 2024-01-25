var name = 'window';

var A = {
   name: 'A',
   sayHello: () => {
      console.log(this.name)
   }
}

num = 10;
console.log(num)
A.sayHello();