const sayHello = function (name) {
  console.log('Hello, ' + world);
}

const returnSayHello = function (name) {
  return 'Hello, ' + name;
}

const greeting = returnSayHello('John');
console.log(greeting);

sayHello('Caliban');
sayHello('Miranda');
sayHello('Ferdinand');