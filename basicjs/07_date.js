let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleTimeString());


console.log(typeof myDate);

let myCreateDaate = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDaate.toLocaleString());

let myCreateDate = new Date(2023, 0, 23)

// let myTimeStamp = new Data.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());


newDate.toLocaleDateString('default',{
    weekday: "long",
    // timeZone: ''
    
})







