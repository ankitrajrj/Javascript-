
// Array sepcific loop

// ["","",""]

// [{},{},{}]

 
// kisi bhi iterator par loop laga sakte hai 


// iterator ka naam aap kuch bhi rakh sakte hai

//------------------------------
 
// const arr = [3,44,5,5];

// for (const num of arr) {

//    console.log(num);

// }


// ----------------------

// const greetings = "Hwllo World"

// for (const key of greetings) {
//     console.log(key)
// }


// Maps ---

const map = new Map();

map.set('in','India');

map.set('usa','united state of amrica')

map.set('fr', "France")

// console.log(map)

// till 10 : 00;

for(const [key,value] of map){

    console.log(key , ':-' , value)
}

 // for of loop me sidha value milta hai hamen .. but for in loop me keys milte hai hame

 // map iteratable nahi hai .. ish liye ushke loye for in ka use nahi kiya ja skta hai 
 