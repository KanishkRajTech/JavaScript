const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval 
}, 0)

console.log(myTotal);


const youTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(youTotal);


const shoppingCart = [
    {
        itemName: "js courec",
        price: 6565
    },
    {
        itemName: "php courec",
        price: 299
    },
    {
        itemName: "html courec",
        price: 4999
    },
    {
        itemName: "css courec",
        price: 100
    },
    {
        itemName: "py courec",
        price: 800
    },
    {
        itemName: "web d courec",
        price: 20000
    } , 
    {
        itemName: "DS courec",
        price: 10000
    }
]
const totalBil = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalBil);
