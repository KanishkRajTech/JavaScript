// Singleton 
//Object.create

// Object Literals

const mySymbol = Symbol("key1")



const jsUser = {
    name:"kanishk",
    "full name": "kanishk raj",
    [mySymbol]: "mykey1",
    age:20,
    location: "Kolkata",
    email: "kanshkraj600@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);              // kanshkraj600@gamil.com
console.log(jsUser["email"]);           // kanshkraj600@gamil.com
console.log(jsUser["full name"]);       // kanishk raj
console.log(typeof jsUser.mySymbol);

jsUser.email = "kanishkraj601@gmail.com"
// Object.freeze(jsUser) // lock the object values
jsUser.email = "kanishkraj602@gmail.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
    
}
console.log(jsUser.greeting()); //Hello js User


jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
    
}
console.log(jsUser.greetingTwo()); //Hello js User, kanishk