

// This Referse To The Current Context (Context Ka Matlab Hai Values)

const user = {

    username:"hitesh",
    price:999,

    welcomeMessage: function(){

        console.log(` ${this.username}, Welcome To Website `)

        console.log(this);

    }

}

// user.welcomeMessage();

// user.username = "Sam";

// user.welcomeMessage();

// console.log(this) //-ye hame empty Object Dega Node Js KE Andaer BUT browser Ke andar ye hame window OBject dega Q ki Browser Ke liye Window EK global Object Hai

//------------------------------------------------------------------------

// This KA USe HAm Objects Ke Andsr HI Karte HAi Auhe Functions Ke Andar Ham Kuch NAhi Kar Sakte Hai 

function chaiOne(){
    
    let username = "hitesh"
    console.log(this)

}

// chaiOne();

const chaiTwo = function (){
    let userId = "Ankit";
    console.log(this);
    console.log("hi-----------i");
}

// chaiTwo();

const ChaiThree = () =>{
    let user = "Abhi";

    console.log(this);
    console.log(this.user);

}

// ChaiThree();

// -------------- Let's Talk About Arrow Function --------------------

const addTwo = (num1, num2) =>{
    return num1 + num2;
}

console.log(addTwo(3,4));

// jab ham return keyword use krte hai toh ushe bolte hai - Explicit Return ..

// jab ham return keyword nahi use krte hai toh ushe bolte hai - impicit  Return ..

const SumNum = (no1,no2) => (no1 + no2) // jab ham prenthesis use krte hai toh hame return keyword use krne ki jarurat nahi hai ..

const TwoSum = (numm1,numm2) =>  { return numm1 + numm2 } // jab ham curley brakes use krte hai toh hame return keyword likhna padega 

// parenthisis ka use hai JAb ham Object return krte hai 

const sumNO = (nuum1,numm2) => ({username:"hitesh"});

console.log(sumNO(5,5));
