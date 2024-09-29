//  IF

const temperature = 41

if(temperature > 50){
    console.log("less than 50");
}
else{
    console.log('temprature is greater than 50');
    
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`); // User power: fly
     
}
// console.log(`User power: ${power}`); // error

const balance = 1000
if (balance > 500 ) console.log("test");  // test


// Else If

const amount = 1000
if(amount < 500){
    console.log(`Amount less than 500`);
}
else if(amount < 750){
    console.log(`Amount less than 750`);
}
else if(amount < 900){
    console.log(`Amount less than 900`);
}
else{
    console.log(`Amount less than 1200`); // Amount less than 1200
}

const userloggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const  loggedInFormEmial = true
if(userloggedIn && debitCard && 2 ==2){
    console.log("Allow to buy anything") // Allow to buy anything
}

if(loggedInFormEmial || loggedInFormGoogle){
    console.log("User logged in");  // User logged in
    
}