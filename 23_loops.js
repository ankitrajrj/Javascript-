  for (let i = 0; i <= 10; i++){

    const elemnt = i ;

    if(elemnt == 5 ){

        console.log(" 5 is best number ")
    }

    console.log(elemnt)


  }

  // you dont have access of scope outside of scope 

  // console.log(elemnt)


  // Nested Loop ----------------------------------------------------

  for(let i = 0; i <= 10 ; i++){

    console.log("Outer Loop" , i)

    for(let j = 0 ; j <= 10 ; j++){

      console.log(" Inner loop " , j , "And Outer Loop is : " , i)

    }

  }
  

  // table 
  

  //  for(  let i = 0;  i <= 10  ; i++){

  //   for ( let j = 0 ; j<=10 ; j++){


  //     console.log( i  + "*"  + j  +  "=" + i*j)

  //   }
  //  }


   // break and continue 

    for( let i = 0; i <= 10 ; i ++){

      if(i == 5){

        console.log(" Detected 5 ");
        break; // to terminate the flow 

        // continue; // to jump that perticular condition / or leave it 
  
      }
      console.log(`Value of i is ${i}`);

    }



