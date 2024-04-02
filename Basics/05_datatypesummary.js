//types of Datatypes

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) they generally have object as datatype

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
const book = null;
const books =undefined;

console.log(typeof anotherId); // this is a symbol with datatype symbol
console.log(typeof heros); //this is a array with datatype object 
console.log(typeof myObj); // this is a object with datatype object
console.log(typeof myFunction); //this is a function it also has datatype function which is genrally called as object function
console.log(typeof book); // it is null but datatype is object
console.log(typeof books);//it is undefined 

// https://262.ecma-international.org/5.1/#sec-11.4.3



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MEMORY AND ITS TYPES


//Stack(Primitive)(Copy pf Variable)(change in copy)

//Heap(Non Primitve datatypes)(Reference to otriginal object)(change to original object)

//refer Dhara Copy for notes