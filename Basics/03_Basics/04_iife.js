// Immediately Invoked Function Expressions (IIFE)
//regular way to call
function chai(){
    console.log("take y0ur tea")
}
chai(); //calling chai 

//to call immediately Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //here(); is same as chai(); but remember it has to beclosed with ; this to ensure break and also function needs to be enclosed in() to make it look diff than regular

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // you can even pass parameters to it as you would to chai function using chai("someword"); eg is of arrow function