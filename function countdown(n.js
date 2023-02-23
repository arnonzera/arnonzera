function countdown(n){
    if(n<1) 
      return [];
    else if(n==1)
      return 1;
    else{
        return console.log([countdown(n) - 1]);
    }
  }