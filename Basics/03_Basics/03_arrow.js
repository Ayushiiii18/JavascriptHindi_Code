const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//in a function of object "this" refers to to the parent object 
// user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);
//in a function "this" refers to global object 
// function chai(){
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username);
// }

// chai()
//this is undefined as it refers to global which doen not have username
// const chai = function () {
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username);
// }
//this is empty object here not global 
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
    
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2

 //const addTwo = (num1, num2) => ( num1 + num2 ) //with parenthesis it will return automatically
 //const addTwo = (num1, num2) => {num1 + num2 }  // with curly braces you have to give return it wont automatically return

//const addTwo = (num1, num2) => ({username: "hitesh"})


//  console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

//myArray.forEach((item)=>console.log(item))
