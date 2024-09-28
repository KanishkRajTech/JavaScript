let score = "78kani"

console.log(typeof score);  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //NUmber
console.log(valueInNumber); // NaN


//  "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLogined = "kanishk"

let booleanIsLoggedIn = Boolean(isLogined)
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false
// "kanishk" => true


let someNumber = 33

let stringNuber = String(someNumber)
console.log(stringNuber);
console.log(typeof stringNuber);


// ****************************** Operations  ****************************** 

let value = 3
let negValue = -value
//console.log(negValue);  -3

console.log(2 + 2);    // 4
console.log(2 - 2);    // 0
console.log(2 * 2);    // 4
console.log(2 ** 2);   // 4
console.log(2 / 2);    // 1
console.log(2 % 2);    // 0

let str1 = "kanishk"
let str2 = " Raj"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);     // 12
console.log(1 + "2");     // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // bad readabilitty

let gameCounter = 100
++gameCounter;
console.log(gameCounter);






