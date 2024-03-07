// Control Flow / Logic Flow 

// if - Statment 

// Syntax Of if Statment 

/* if (Condition){ // Agar Condition True haai toh Ishke Andar ka Code Execute HOga Warna Bahar Ka Code Execute Hoga 


}
 
*/

//--------------------------


// const userLoggedIn = true ;

// There Is Some OPerators Are Avilable For Comparision 

// < , > , <= , >= , == (Check Value Only) , ===(Check Value With Type) , != ,

// if( 2 == "2" ){

// console.log("execute")

// }


// if( 2 != 3 ){

//     console.log("execute")

//     }


// const temperature = 41 ;

// if ( temperature < 50 ){

//     console.log(" temperature is less than 50 ");

// }
// else {

// console.log("temperature is gretaer then 50 ")

// }

//----------------

// const score = 200;

// if ( score > 100 ){

//     const power = "fly";
//     console.log(`Use Power : ${power}`);

// }

//--------------- One Liner If Condition -----

// const balance = 1000;

// if (balance  > 500) console.log("test"),console.log("test2");


//------------------------------------------------------

// const balance = 1000;
// if (balance < 500){
//     console.log("less than 500")
// }
// else if ( balance < 750 ){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// }
// else{

//     console.log(" less than 1200 ")
// }

//---------------------------------------------------------------

const userLogIn = true;

const debitCard = true;

const loggedInFromGoogle = false;

const loggedInFromEmail = true;

// // And Operator 

// if (userLogIn && debitCard && 2 == 3) {

//     console.log("Aloow To Buy Course ..");

// }

// Or Opearator 

if (loggedInFromGoogle || loggedInFromEmail){

console.log(" User Logged In ")

}

