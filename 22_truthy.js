
// const userEmail = "hitesh@232";

// if(userEmail){ // yaha par ham koi comparision nahi kar rhe h bs hamne maan liya hai ki ye true value hai 

//     console.log("Got The User Email");

// }
// else{

//     console.log("Dont have any user email ");

// }

// There Are Some Truthy value And falsy value As Well 

// falsy Value 

// false, 0 , -0 , BigInt 0n , "" , null , undefind , NaN

// truthy Value 

// "0" , "falsy"," " , [] , {} , function (){} 


// How to Check Array Is Empty Or Not

// const userEmail = [];

// if(userEmail.length === 0){
//     console.log("Array Is Empty ..")
// }


// How TO check Object Is Empty Or Not 

// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){

//     console.log(" Object Is Empty .. ")

// }


// Some Comparision

// false == 0 --> ture 

// false == '' --> true

// 0 == '' --> true 


// Nulish Coalescing Operator (??) :-- ye sirf  null or undefined ke liye bana hai 

// let val1 ;

// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15 ;

// val1 = null ?? 12 ?? 55 ;  // ish case me ye first value lega yani 12 lega 

// console.log(val1);


// Ternary Operator  ----------------------------------------

// Syntax 

// condition ? true : false ;


const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less Than 80") : console.log("More Than 80 ");

// summary -------------------------------------------------------------

//  ek hi time par ham sara code execute nahi krna chate hai condition based code likhna sikha 

// hamne dekha ki kish tarah se operator ka use krke ham user se question puch sakte hai 

// hamse scope ke bare me dekha ki kish tarah se scope ke cheje bahar nahi jati 

// ushke baad dekha ke kish trah se ek line me if multiple statment code likhna bad practise hai 


// if ke sath else is lagake ham  ultiple statment likh sakte hai


// uhske baad hamne multiple checkings ki and or ka use krke 


// hamne swith case dekha 

// uhske baad hamne dekha truthy or false value ko 

// array or object ko kaise check kre empty hai ya nahi 

// hamne new ropic padha nulish coalescing operator 

// finally  dekha ternary   operator ke bare me 

