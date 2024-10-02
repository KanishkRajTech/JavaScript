//  for of 



// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, ]

for (const num of arr) {
    console.log(num); // 1 to 6
    
}

const greeting = "Hello world"
for (const greet of greeting){
    console.log(`Each char is ${greet}`);
    
}
const map1 = new Map();
map1.set('IN', "India")
map1.set('USA', "United States of America"); 
map1.set('Fr', "France");

console.log(map1);

for (const [key, value] of map1) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'geme2': 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);   //error
}