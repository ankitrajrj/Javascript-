
// lets Talk About For-Each Loop 

const coding = ['js','ruby','java','python','cpp'];


// 1st Way To Write For Each Loop


// hamne ishke andar callback diya hai toh ishka naam nahi likhenge 
                       // item varibale ka naam hai 
coding.forEach( function (item) { // Array ke Har Value Ko leke Ishme As A parameter push kiya jaega phir uhske sath jo chahe kar skte hai 

    console.log(item);

})

// 2nd Way To Write CallBack

console.log('------------------------------------------------');

function printMe(value){
    console.log(value)
}

coding.forEach(printMe);


//----------------------------------------------------------------

coding.forEach( (item,index,arr) =>{ // for each ke pass .. items , index , arr sbka access hota hai 

    console.log(item,index,arr);

})


console.log('--------------------------------------------------------');

// for Each for Objects 

const myCoding = [

    {

        laguageName :'java',
        languageFileName:'java'
    },
    {

        laguageName:'javaScript',
        languageFileName:'js'

    },
    {

        laguageName:'python',
        languageFileName:'py'
    }
]

myCoding.forEach( (item)=>{ // yaha jo item hai wo ek ek individual Object Hai 
console.log(item)
})

console.log('--------------------------------------------------------')
//-------------------------------------------------------

myCoding.forEach( (item)=>{ // yaha jo item hai wo ek ek individual Object Hai 
console.log(item.languageFileName)
})

