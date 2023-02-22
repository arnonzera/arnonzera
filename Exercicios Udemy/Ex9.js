function objetoo(object){
    var age = object.idade;
    var height = object.altura;
    var obj2 = {idade2: age};
    return age;
}

const obj = {idade:17, altura: 1.7};
console.log(obj.idade);
console.log(objetoo(obj));