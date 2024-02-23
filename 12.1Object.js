// Object Destructuring 


const purchaseCourse = {

    CourseName : "Js IN Hindi",
    price:"3999",
    courseINctructor: "Ranjeet"

}

const {courseINctructor:teacher} = purchaseCourse;

console.log(teacher);

// {class} // ish tarah ka Synta ka matlab hai ki ye destructure ka codee hai 


// Api - app apna kaam kisi or par app dalte hai toh ushe api kehte hai 
// jaise app resturant gaye hai or apko bada pao khana hai toh ye apki tension thode hai ki kon banaega ushe koi or banake layega apke liye./

// pahle ke time me values aate thi XML structure me abhi ke time values aate hai JSON structure me 

// JSON is Similar like A Object but wo bina naam ke hote hai 

// First Example OF Api 

// {
//     "name":"Ankit",
//     age:22,
// }

// Seconf Example OF APi 

// [
//     {},
//     {},
//     {}
// ]

//----------