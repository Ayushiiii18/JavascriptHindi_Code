//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // it will have scope inside this curly braces only
    
}



//console.log(a); //it will give global a value as it is a global variable and not local value
//console.log(b);//it will give error as b variable is not defined "b" string is fine
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
 //console.log(website);

     two()

}

 //one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //this will work we can give a value to function before its initialization

function addone(num){
    return num + 1
}



// addTwo(5)  //this wont work because add two is a variable holding function which is not declared previously
// const addTwo = function(num){
//     return num + 2
// }