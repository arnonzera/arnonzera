function retornar_num(coisa){
    coisa2 = [];
    for (let index = 0; index < coisa.length; index++) {
        if(isNaN(coisa[index]) == false){
            coisa2.push(coisa[index]);
        }
    }
    return coisa2;
}

console.log(retornar_num(["arnon", 10, "Tuco", 343, "Blabla", 12]));