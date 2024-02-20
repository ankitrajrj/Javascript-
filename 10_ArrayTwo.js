
const marvel_heros = ["thor", "IronMan", "SpiderMan"];
const dc_heros = ["Superman", "flash", "batman"];


// marvel_heros.push(dc_heros);

// // .push method me pure Array ko As A Data Le Liya ..
// console.log(marvel_heros);

// // Accessing The Specific element From Array ..
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// you can also use Spread Operator for mergind arrays 

const all_hero_Here = [...marvel_heros,...dc_heros];
console.log(all_hero_Here);
console.log(all_hero_Here[3]);


// in Case Agar apke Pass Nested array Aajaye 
// toh .flat method ka use karke app ushe concatinate kar skate hai 

const another_array = [11,223,[44,77,55],33,4423,332,[22,[3],4] ,55,99]
// const real_another_array = another_array.flat(1);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// how to check and convert the Array 

console.log(Array.isArray(another_array)); // ye check karta hai ki ish name ka Array Hai ya Nahi 

console.log(Array.from("Ankit Raj")); // .form ko ham jitni value Denge Ye Sabko Array Bana Dega 

console.log(Array.from({name:"hitesh"}));  // till 13:30 interesting case -- yaha hamko btana hoga ki hame key se array banana hai value se 


// variable Ya Values Ko Use Karke Array Banana 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3,score1));