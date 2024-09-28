const user = {
    userName: "Kanishk Raj",
    price: 99999,

    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage() // Kanishk Raj , Welcome to website
user.userName = "Prince Raj"
user.welcomeMessage() // Prince Raj , Welcome to website

console.log(this); // {}


function cahi(){
    console.log(this);
    
}
cahi()


const chai1 = function(){
    let userName = "kanishk raj"
    console.log(this.userName);
    
}
chai1()

const chai2 =  () => {
    let userName = "kanishk raj"
    console.log(this);
    
}
chai2()


const subTwo =(num1, num2) => {
    return num1 - num2
}
console.log(subTwo(3, 4));  // -1

const subTwo1 =(num1, num2) =>  num1 - num2
console.log(subTwo1(3, 4));  // -1

const subTwo2 =(num1, num2) =>   ( num1 - num2)
console.log(subTwo2(3, 4));  // -1




const subTwo3 =(num1, num2) =>  ( {userName: "kanishk"} )
console.log(subTwo3(3, 4));  // { userName: 'kanishk' }

