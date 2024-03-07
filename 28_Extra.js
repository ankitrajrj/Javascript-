const coding = ['js','ruby','java','python','cpp'];

// lecture 30 - forEach sirf Values Ko Print Karta Hai KUch retun Nahi Karta Hai 

//  const value = coding.forEach ( (item) => {

//     console.log(item);

// })

// console.log(value);

// kai bar hame values ka use karke kuch or return karna hota hai ..

const myNums = [1,2,3,4,5,6,7,8,9];

// filter For Each Ki tarah Hote hai But Ihsme Hame Dene Hote Hai Condition - jo ush condition ko satisfy krenge Wahi value Hame Return Me milegi

// let val =  myNums.filter( (nums) => nums > 4); // agar ham aishe define karte hai toh values apne app return hogi but agar hamne curley brakes lagaya toh return keyword likhna hoga Q ki hamne Curley Brakes Lagake Scope Start kAr diya hai 

let ReturnedValue = myNums.filter( (num) =>{

    return num > 4

})


console.log(ReturnedValue) // [ 5, 6, 7, 8, 9 ]

// --- lets Do the Same Thing with for Each - but it needs some logic 

const newNums = [];

myNums.forEach ( (nums)=>{

    if(nums > 4){
        
    newNums.push(nums);
        
    }

})

console.log(newNums);