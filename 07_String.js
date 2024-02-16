// in javaScript We caj Create a String Using 
// Single And Double Quotes As Well


const Name = "Ankit";
const RepoCount = 50 ;

// console.log(Name +  RepoCount  + "Raj");  // old method of Concat

console.log(`Hello my name is ${Name} and my repo count is ${RepoCount}`);


//--------------------------

// console ke andar jake jab ham String Object banate hai toh 
// Hame ushke sare methods or key Value Pair Milte hai 

//-------------------------

const gameName = new String("Ankit Raj")

console.log(gameName[2]);

console.log(gameName.length);

console.log(gameName.toLocaleUpperCase()); // but ye hamare original String Ko change ngi krega

console.log(gameName.__proto__);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


// Stirng ke Sare method Bahur Importnt hai
// Interview Prespective Se -- 11:00 lecture - 11


//----------------



const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4) // negative value dene par ye piche se start hota hai 
console.log(anotherString);

// lec 11 till 15:00

const newStringOne = "  hitesh  ";

console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20raj";

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(url.includes('Ankit'));

console.log(gameName.split('-'));


// read all stringfs methods at least once so that yoy can get some hands on experiance 

// leacture done ---