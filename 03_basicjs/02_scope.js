//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kanishk Raj"

    function two(){
        const website = "youtube"
        console.log(username);  // kanishk Raj
    } 
    // console.log(website); // error

     two()

}

one()

if (true) {
    const username = "kanishk"
    if (username === "kanishk") {
        const website = " youtube"
        console.log(username + website); // kanishk youtube
    }
    //  console.log(website); // error
}

//  console.log(username); // error


// ++++++++++++++++++ interesting topic ++++++++++++++++++


console.log(addone(5)) //6

function addone(num){
    return num + 1
}

addone(5)

// addTwo(5) // error
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)) //  7