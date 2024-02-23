
// Multiple argument ek sath pass karne ke liye ham rest Operator Use Karenge 

let sum = 0;
function CalculateCartPrice(...val){
   for(let i = 0; i < val.length ; i++){
     sum = sum  + val[i];
   }
   return sum;
}

console.log(CalculateCartPrice(200,400,500,2000))

const user = {

  username:"hitesh",
  price:99

}

function handleObject(anyObject){

  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user); // // this is first Way to Pass Refeance 

handleObject({     // This Is The Second Way To Pass Object 
  username:"sam",  
  price:399
})

// Array In Function 

const myNewArray = [200,400,100];

function returnSecondValue(getArray){
  return getArray;
}


// function returnSecondValue(getArray){ // This Is The Way To Access Second Element 

//   return getArray[2];

// }
 
console.log(returnSecondValue(myNewArray)); // FirstWay To Pass Array 

console.log(returnSecondValue([200,400,500,1000])); // Second Way To Pass Value 
