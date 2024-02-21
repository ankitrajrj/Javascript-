
// Function Is a Block Of Code Which do its task its Value When it is Called 

function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")
}
sayMyName();


function addTwoNumbers( num1 , num2){
    console.log(num1 + num2)
}
addTwoNumbers(3,null);  
addTwoNumbers(3,9); 

function SumTw(num1,num2){

    let solution = num1 + num2 ;
    return solution;

}

const result = SumTw(3,5);
console.log("Result: ", result);

// By Default Function Ka EK Rule Hota hai .. Ki return Statment Ke Baad Koi Bhi LIne Execute Nahi Hota hai 


function loginUserMessage(username = "Ankit"){ // Ankit Is By Default Value Of Our Function 

    return `${username} just logged In`

}

console.log(loginUserMessage("hitesh"));
