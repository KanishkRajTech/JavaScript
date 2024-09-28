const name = "Kanishk raj"
const reCount = 50

// console.log(name + reCount + "value"); //Kanishk raj50value

console.log(`Hello my name is ${name} and my repo count is ${reCount}`);

const gameName = new String('Kanishk raj-HC')

console.log(gameName.__proto__); // {}

console.log(gameName.length); // 11

console.log(gameName.toLocaleUpperCase()); //KANISHK RAJ

console.log(gameName.charAt(2)); // n

console.log(gameName.indexOf('h')); // 5

const newString = gameName.substring(0,4)
console.log(newString); // kani

const anotherString = gameName.slice(-14,4);
console.log(anotherString); // kani

const string = "        kanishk raj         "
console.log(string.trim()) // trim is used for remove extra sapace

const url = "https://kanishk.com/kanishk%20raj"

console.log(url.replace('%20', '-'))

console.log(url.includes('kanishk'));


const nameThree = "kanishk raj hitk cse"

console.log(nameThree.split(' '));



