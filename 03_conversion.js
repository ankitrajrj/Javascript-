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