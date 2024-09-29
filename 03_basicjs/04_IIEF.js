// Immediately Invoked Function Expressions (IIEF)

(function chai(){
    //named IIEF
    console.log(`DB Connected`);
    
}) () ;
// chai()

( (user) => {
    console.log(`DB is conneected to ${user}`);
    
})('kanishk') 