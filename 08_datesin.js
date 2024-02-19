
// Dates Is Object In JavaScript 

let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log( typeof myDate)

//-----------------
// Define Date Object to See The Date 
let myCreatedDate = new Date(2023,0,23); // javaScript me Month 0 Se Start Hota Hai 

console.log(myCreatedDate.toDateString()); 

//--------------------
// Define Date And Time 
console.log("---------------------------")
let CreateDateTime = new Date(2023,0,2,5,3);
console.log(CreateDateTime.toLocaleString());
console.log("--------------------------------")
// To Set Formated Date And Time 

let MyNewDate = new Date("01-14-2023");

console.log(MyNewDate.toDateString())
console.log(MyNewDate.toLocaleString())
console.log(MyNewDate.toJSON())

// lets Explore Time Stamps In Date 

// jab ham quiz design krenge ya poll design krenge ya phir do time ko compare krenge toh time stamps ka use hoga 

let myTimeStamp = Date.now();
console.log(myTimeStamp) // milisecond me value dega 
// hamne jo date upar banaya tha ush se ham time wale value le sakte hai .getTime se\
console.log(MyNewDate.getTime());

// How to Get values In Second

console.log(Math.floor(Date.now()/1000));

 
// ----

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// Most UseFul Method 

console.log( newDate.toLocaleString('default',{
    weekday:"long"
}))


// lecture 13 end here ......