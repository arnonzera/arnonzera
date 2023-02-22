function multi (x,y) {
    let soma = 0;
    for(var i = 1; i <= y; i++){
        soma = soma + x;
    }
    return console.log(soma);
}

multi(5,3);