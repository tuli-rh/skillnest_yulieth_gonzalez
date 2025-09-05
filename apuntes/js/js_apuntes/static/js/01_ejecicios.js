// calculadora de promedios de notas

// Lista (array) con tres elementos 

let notas = [6.5, 7.0, 5.8];

// solucion 4

let sumaNotas = 0;
for (let index = 0; index < notas.length; index++) {
    sumaNotas = sumaNotas + notas[index];
}

let promedioNotas = sumaNotas / notas.length;

console.log(promedioNotas);






//  ciclo for
// for (let index = 1; index <= 11; index++) {
//     console.log(index);
// }


/* let sumaNotas = notas[0] + notas[1] + notas[2]; 
cantidadNotas = notas.length;
let promedioNotas = sumaNotas / 3;
console.log(promedioNotas); */


/* let sumaNotas = 6.5 + 7.0 + 5.8;
let promedioNotas = sumaNotas / 3;
console.log(promedioNotas); */