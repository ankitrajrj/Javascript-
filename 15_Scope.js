// {} // // curley Braces He Scope Hai JO HEr PRograming Language Me Apko Dikh Jaega 


// ye function and if else ke sath jaha bhi laga rahega waha staring se end tak scope define karta hai 

// jo code ya variable block ke andar kaam krega wo hai block scope baki var hai global scope

// jab ham node ka use krke code kar rhe hote hai ushke liye global scope alag hai or jab ham browser engine pr kaam kr rhe hai ushke liye global scope alag hai 

let a = 400;

var c = 300;

if(true){

    let a = 10;
    const b = 20;
    var c = 30; // this is avilable everyWere

}

console.log(a);
 // console.log(b); // not avilable because of scoping
console.log(c);