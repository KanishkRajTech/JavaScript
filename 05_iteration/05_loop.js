const coding = ["js", "riby", "java", "python", "cpp"]

coding.forEach( function (item){
    console.log(item);
    
})

coding.forEach( (val) =>{
    console.log(val);
    
})


function printMe(value){
    console.log(value);
    
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languagFileName: "js"
    },
    {
        languageName: "C++",
        languagFileName: "cpp"
    },
    {
        languageName: "python",
        languagFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})