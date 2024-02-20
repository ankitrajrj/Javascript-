// numbers aap jab bhi define krte hai jaise ki 
// apko score define krni hai kisi game ka
// ya account ki balance ko dekhani ho

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Numbers ke Pass Bahut Sare Methods Hai But As Compare TO Sting Bahut Kam Methods Hai 
// toString Method Numbers ko String Me kar Dega OR agar Ye String Hogya To ham Ishpe string ke Mthod KO apply kr sakte hai 
console.log(balance.toString().length);

// toFix Method - Used TO Fix The Precision Value 

console.log(balance.toFixed(2)); // yaha jitne value doge utna decimal add hoga number ke baad


// toPrecision is used to precise the Value .

const otherNumbers = 123.8966

console.log(otherNumbers.toPrecision(3)) // jitna precision dohe utne value par ye focus krega


// convet value into structured formate in indian standard

const price = 1000000;

console.log(price.toLocaleString('en-IN'));

// javaScript Ke andar MAX And MIN Value Bhi Hota Hai

//***************************** Maths IN JS  ***************/

// java script me maths ek object hai jishke Andar Bahut Sare Properties Hai 

// browser me console par maths print krke ham ushke Sare Properties Dekh Sakte Hai

console.log(Math);
console.log(Math.abs(-4)); // ye method negative ko positive me kr deta hai 
console.log(Math.round(40.3)); // ye lagbhag value deta hai 
console.log(Math.ceil(4.2)); // 4 se jara bhi upar hua toh ye 4 ke upar ki value lega 
console.log(Math.floor(4.9)); // ye hamesha niche wale value lega ..


// to find min and max value from given data 

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));




console.log(Math.floor(Math.random()*50 + 1)); // +1 karne se minimum jo value hai wo 1 aaegi 

