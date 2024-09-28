const  accountId = 144453
let accountEmial = "kanishkraj600@gmial.com"
var accountPassword = "123456789"
accountCity = "katihar"
let accountState;

//accountId =2// not allowed

accountEmial = "kanishk@gmil.com"
accountPassword = "321"
accountCity = "kolkata"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmial, accountPassword, accountCity, accountState])
