let score = "30ccab";

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)

console.log(typeof valueNumber);
console.log(valueNumber)

let marks = null;

let finalMarks = Number(marks);
console.log(marks);
console.log(finalMarks);


// As we see after converting these into number 


// "33" => 33

// "33abc" => Nan 

// true => 1;  false => 0;

//-------------------------


let isLoggedIn = "hitesh";

let booleanIsLogged = Boolean(isLoggedIn);

console.log(booleanIsLogged);

// 1 => true 
// 0 => false 
// "" => false
//"hitesh" => true 

let someNumber = 33;

let NumberToString = String(someNumber);
console.log(NumberToString);
console.log(typeof NumberToString);


// ************* Operations ****************

let value = 3;

let negValue = -value;

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // two ki power 3
console.log(2/3);
console.log(27%9);


//----

let str1 = "hello";
let str2 = " Ankit";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + (2+2)); // 14
console.log("1" + 2 + 2); // 122 
console.log(1 + 2 + "2"); // 32


// bad practises 

console.log(+true) //1
console.log(+"")   // 2

let num1 , num2 , num3 ;
num1 = num2 =  num3 = 2+2;

//-------

// postfix and prefix 

let counter = 100;

console.log(counter++) //it incremnt value after using previous value 
console.log(++counter) // it incerement value before using value 


// go to mDN and read about pre and post fix 



