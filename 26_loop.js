
// for in enumerable propertyes par iterate karta hai 
// or Objects Par bhi iterate karta hai 

const myObj = {

    js:'javaScript',
    cpp:'c++',
    rb:'rubby',
    swift:'swift'

}

for (const key in myObj) {
    console.log(key)
}

console.log('---------------------------------------------');

for (const key in myObj) {

    console.log(myObj[key]);

}

console.log('---------------------------------------------');


for (const key in myObj) {

    console.log(` ${key}  is a shortcut for ${myObj[key]}`);

}


// Array ek Object Hai or app Array Me keys 0 se start hote hai by default
// but ham objects me keys khud sse set kar skte hai ..

// for of loop me sidha value milta hai hamen .. but for in loop me keys milte hai hame ..

// for in for Array

const arr = ['spiderman','ironman','saktiman','hero'];

for (const key in arr) {
    console.log(key);
}

console.log('--------------------');

for (const key in arr) {
    console.log(arr[key]);
}

// objects ke andar loop lagana hai toh for in loop laga denge 

// Arrays ke uper for of loop laga denge 

