// in Case of premitive Type 
// Original Variable not Affected 

let myYoutubeName = "Ankitrj"

let anotherName = myYoutubeName;

console.log(myYoutubeName) // Ankitrj
console.log(anotherName) // Ankitrj

anotherName = "DevX"

console.log(myYoutubeName);  // Ankitrj
console.log(anotherName) // DevX

//--------------

let UserOne = {

    email:"user@google.com",
    upi:"user@ybl"

}

let UserTwo = UserOne;

console.log(UserOne)
console.log(UserTwo)

UserTwo.upi = "7080@ybl"; // changes made in second Object 


console.log(UserOne)
console.log(UserTwo)