/**
 * Ejercicio 6
 */

let nombre;

nombre = prompt('Introduce tu nombre');

function saludar(nombre){
    console.log('Bienvenid@'+nombre);
}

alert(saludar);

let edad;

edad = prompt('Introduce tu edad: ');

function calculo_edad(){
    if(edad < 0){
        console.log('Edad erronea, tiene que ser superior a 0');
    }else if(edad < 18 ){
        console.log('Menor de edad');
    }else if(edad < 65){
        console.log('Adulto');
    }else if(edad >= 65){
        console.log('Jubilado');
    }
}

alert(calculo_edad);

let nota;
let v3;

nota = prompt('Introduce una nota entera entre 0 y 10');

function calculo_nota () {
    if (nota < 0 || nota > 10) {
        console.log('nota no valida');
    } else if(nota < 3) {
        console.log('insuficiente');
    } else if(nota < 5 ) {
        console.log('Regular');
    }else if(nota < 6 ){
        console.log('Suficiente');
    }else if(nota < 7){
        console.log('Bien');
    }else if(nota < 9){
        console.log('Muy Bien');
    }else if(nota <= 10){
        console.log('Excelente');
    }
}
v3 = calculo_nota;
alert(calculo_nota);