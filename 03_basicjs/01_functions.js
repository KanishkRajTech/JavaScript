function sayMyName() {
    console.log("kanishk Raj");
    
}

sayMyName()


function addTwoNumber(num1, num2 ){
    console.log(  num1 + num2);
    
}
addTwoNumber() // NaN

addTwoNumber(2, 5) // 7

addTwoNumber(3, "4") // 34

addTwoNumber(3, "a")  // 3a

addTwoNumber(3, null) // 3

const result = addTwoNumber(3, 5)
console.log(`Resulst ${result}`);  // Resulst undefined


function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}

const results = addTwoNum(3, 5)
console.log(`Resulst ${results}`); // Resulst 8

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return  
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("kanishk"));// kanishk just logged in
console.log(loginUserMessage()); // Please enter a username


function calculateCartPrice(...price){
    let total = 0;
    for (const finlPrice of price) {
      total += finlPrice;
    }
    return total
}
console.log(calculateCartPrice(20, 456, 854, 4874,484));  // 6688


const user ={
    userName: "kanishk",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
handleObject(user)                  // Username is kanishk and price is 199

handleObject({
    userName: "Prince Raj",
    price: 290
})                              //Username is Prince Raj and price is 290


const myArray = [12, 23, 45, 54, 545, 64]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myArray)); // 23
