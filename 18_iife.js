// Immediately Invoked Function Expression (IIFE)

// Normal Function 

function chai(){

    console.log('DB Connection');
    
}

// chai();

// Global Scope Ke Pollution se Problem Hoti Hai  kai baar

// toh ush global Scope ke jo varibales hai ya jo bhi waha decleration hai 
// ushke pollution ko hatane ke liye hamne (IIFE) ka Use KIya 


// 3 Example Of ( IIFE );

(function Biskit(){

    console.log(`DB CONNECTED`)

})();


//-------------------------------------------


( function aurCode(name){
    console.log(`DB CONNECTION ${name}`)
})('hitesh');

//-------------------------------------------

((UserName) =>{
    console.log(`DB CONNECTION ${UserName}`)
})('Ankit');

