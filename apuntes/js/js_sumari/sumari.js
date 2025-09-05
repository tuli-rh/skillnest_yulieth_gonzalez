// Funcion que permite sumar dos números
// function sumarDosNuemeros() {
//     let num1 = 2;
//     let num2 = 4;
//     let resultado = num1 + num2;
//     console.log(resultado); //mostrar resultado
// }

// Función que permite sumar dos números y retornar el resultado
function sumarDosNumeros(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

let resultadoSuma = sumarDosNumeros(3, 4);

/*
Funciones 
1. ¿Es una función? (despues ya no es necesaria)
2. ¿El "nombre" de la función?
3. ¿Necesita algún valor? (parámetro)
4. ¿Retorna "algo?" 
 */

/* Variables:
1. ¿Es una variable? (despues ya no es necesaria)
2. ¿El "nombre" de la variable?
3. ¿Cual es su tipo de dato? (número, texto, lógico, etc)
4. ¿La variable tiene una valor asignado?
*/

// Recibe los números y retorna el resultado 

function sumarTresNumeros(num1, num2, num3) {
    let resultado = num1 + num2 + num3;
    return resultado; 
}

let resultadoSumarTresNumeros = sumarTresNumeros(2, 3, 5);


/* Función que permite saludar por nombre
Recibe nombre y no retorna valor
*/

function saludo(name) {
    let nombre = "Hola " + name;
    console.log(nombre);
    //Opción: console.log("Hola " + nombre);
}

saludo("Yuli");


// Función que permite multiplicar dos números
// Recibe los números y retorna el resultado 

function multiplicarDosNum(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

let resultadoMulticlicarDosNum = multiplicarDosNum(2, 5);


/*Operadores aritmeticos (matematicos)
Suma +
Resta -
Multiplicación *
División /
Módulo (residuo) %
Potencia **
*/