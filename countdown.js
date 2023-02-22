function countdown(n){
  
    if(n<1) 
      return [];
    
    else{
      const variavel = countdown(n - 1);
      variavel.unshift(n);
      return variavel;

      //[countdown(n - 1), n];
    }
  }

  console.log(countdown(10));
