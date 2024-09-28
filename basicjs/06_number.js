const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(typeof(balance.toString())); // string
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.879754852665
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 100000000000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //4

console.log(Math.round(234.78297348)); //235

console.log(Math.ceil(4.2));

console.log(Math.floor(4.2));

console.log(Math.min(4, 5, 6, 7, 8, 9));

console.log(Math.random());
console.log(Math.random()*10 + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


