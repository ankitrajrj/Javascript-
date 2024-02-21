
//-------------------------------------------------------------------------
// jab bhi ham Objects ko Literal ke tarrah define karte hai toh singletone nahi banta hai 

// jab ham Objects ko Constructor ke Tarah define karte Hai toh SingleTone Banta hai 

// matlab Constructor Se Object banega toh hamesha singletone Banega 

//-------------------------------------------------------------------------

// Constructor Method

Object.create 


// Object Literals Method - to Create a OBject 

// hame Object Ke andar Key--value Pair Add Karne Hote Hai ..
// By Default OBject Me jo  Key Hai Wo As A String Consider Hota Hai ..


// declare a symbol and take it as a Symbol..
const mySym = Symbol("keys22")

const JsUser = {
    name:"Ankit Raj",
    "full Name": "Ankit Raj",
    // way to add symbol as a key Value Pair ..
    [mySym]:"ank33",
    age:18,
    location:"jaipur",
    email:"ankit@123"
};

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full Name"])
console.log(JsUser[mySym])

// Agar Object ko Frez Kar Denge toh Ham ush OBject me aage koi Change Nahi Kar painge

// Object.freeze(JsUser)
console.log(JsUser )

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}



console.log(JsUser.greeting())
JsUser.greeting2()