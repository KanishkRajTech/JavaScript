// Array

const myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const myHeors = ["Kanishk", "Prince", "Rohit"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArry[1]);


// Array Methods

myArry.push(11) // insert new element at end
myArry.pop()  // remove the last element
myArry.unshift(9) 
myArry.shift()

console.log(myArry.includes(9)); // find the element with return type bollean
console.log(myArry.indexOf(1));

console.log(myArry)

const newArry = myArry.join()

console.log(myArry);
console.log(newArry) //1,2,3,4,5,6,7,8,9
console.log(typeof(newArry)) // string


// Slice , Splice

console.log("A" , myArry); // A [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const myn1 = myArry.slice(1,3)
console.log(myn1); // [ 2, 3 ]
console.log("B", myArry); // B [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const myn2 = myArry.splice(1, 3)
console.log("C ", myArry); // C  [ 1, 5, 6, 7, 8, 9 ]
console.log(myn2)  // [ 2, 3, 4 ]


