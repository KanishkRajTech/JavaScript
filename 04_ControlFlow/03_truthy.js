const userEmail = "kanishk@github"

if(userEmail) {
    console.log("got user email");
}
else {
    console.log("Don't have user email");
    
}

// false values

// false , 0, -0, BigInt 0n, "", Null, undefined, NaN

// Truthy values

// True , "0", 'false', " ", [], {}, fucntion(){}, 

if (userEmail.length == 0) {
    console.log("Array is empty"); // Array is empty
}

const emptyObj = {}
if (Object.keys (emptyObj).length === 0 ){
    console.log("Object is empty");  // Object is empty
    
}

// false == 0 => true
// false == '' =>true
// 0 == ' ' => true
 

//  Nullish Coalescing OPetator (??): null undefined

let val1, val2, val3;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15
console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // 15


// Terniary Operator
// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80"); // Less than 80

