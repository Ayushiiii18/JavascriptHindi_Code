// Dates

let myDate = new Date()
//console.log(myDate.toString()); //day month date year time
//console.log(myDate.toDateString());//day month date year
//console.log(myDate.toLocaleString());//mm/dd/yy ,time 
 //console.log(typeof myDate); //object type

 //let myCreatedDate = new Date(2023, 0, 23) 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate); // 2023-01-23time(1)  yy/mm/date
// console.log(myCreatedDate.toLocaleString());//MM/DD/YYY Time(1)

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //jan 1 1969 to current time difference in millisecond
// console.log(myCreatedDate.getTime());//time in millisecond till the given date
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);//yy/mm/date
console.log(newDate.getMonth() + 1); // 3  here 0==> January
console.log(newDate.getDay());//6  here 1==>mon

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})