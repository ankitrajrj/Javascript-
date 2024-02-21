
// Important IntervIew Specific ..

// const tinderUser = new Object();  // ye Constructor ka Use Karke Bana hai toh ye ek SingleTone Hai

// const tinderUser2 = {}; // Ye Ek Non SingleTon 

// console.log(tinderUser);

// console.log(tinderUser2);

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


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2};

const obj4 = {...obj1,...obj2};

console.log(obj3); // ishme 2 object ek sath marge ho jainge 
console.log(obj4); // ishme ek hi object me sare key values aajainge 