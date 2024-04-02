// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//in objects values are stored as key value pair where key is treated as string so when using [" "] to access using string inside it
//how to access object
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //you cant access key string with dot operator 
// console.log(JsUser[mySym])  // to access the symbol now datatype is also symbol if we use mySym without using square brackets it is treated as string as key

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // no further changes can be made
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());