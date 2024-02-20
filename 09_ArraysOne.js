// array 

const myArr = [0,1,2,3,4,5];

const myHeros = ["shaktiman","powerRangers"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[3]);

// Array Method 

myArr.push(6) 
myArr.push(44) // to addd element from the last ..
myArr.push('ankit') 
myArr.push("Raj") 

const rec = myArr.pop() // it will remove element from the last ..

console.log( "deleted element is : " + rec )

console.log(myArr)

myArr.unshift(89,99); // to remove element from start ..
myArr.shift(); // to remove element from start ..

console.log(myArr);


// Questionalble Method In Array 

console.log(myArr.includes(9));

console.log(myArr.indexOf(9)); // if the value not present then it will give you -1

// join method hamare array ko bind + string me bhi Convert kar deta hai .

const newArr = myArr.join();
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// Differenece Between Slice And Splice .. 

const arr = [33,44,55,66,77,99];
const opSlice = arr.slice(1,4);
// it will give you copy portion of Array ..
console.log("OriginalArray : " , arr);
console.log( "AfterSlice : ",opSlice);

//-------------

const OpSplice = arr.splice(1,3);
console.log("OriginalArray After splice : " , OpSplice);
console.log(" Spliced Array : ", OpSplice)

