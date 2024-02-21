
//---------------------------------------------
// Important IntervIew Specific ..

// const tinderUser = new Object();  // ye Constructor ka Use Karke Bana hai toh ye ek SingleTone Hai

// const tinderUser2 = {}; // Ye Ek Non SingleTon 

// console.log(tinderUser);

// console.log(tinderUser2);

//--------------------------------------------

// const OmegalUser = {};
// OmegalUser.id = Math.floor(Math.random() * 90)
// OmegalUser.name = "Ankit";
// OmegalUser.isLoggedIn = false;
// console.log(OmegalUser);

const regularUser = {
    email: "some@gmail.com",
    full_name: {
        username :{
            firstName : "Ankit",
            LastName : "Raj",
        }
    }
}

console.log(regularUser.full_name.username);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

const obj3 = {obj1,obj2}; // Syntax 1

const obj4 = {...obj1,...obj2}; // Syntax 2

const obj5 = Object.assign({},obj1,obj2); // Syntax 3

console.log(obj3); // ishme 2 object ek sath marge ho jainge 
console.log(obj4); // ishme ek hi object me sare key values aajainge 
console.log(obj5); // ye bhi same spread jaisa kaam karega ..


const user = [

    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"rohit@3232"
    },
    {
        id:3,
        email:"rohit@3232"
    }
]

user[1].email

// kisi bhi object me se sare keys nikalne ke liye 

console.log(Object.keys(obj4)); // ye object me se sare values ko nikal lega or array ke room me return krega

console.log(Object.entries(obj4)) // ye sare key valu pair ko array ke roop me return krega 

console.log(regularUser.hasOwnProperty('isLoggedIn'));