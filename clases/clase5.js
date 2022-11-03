const moment = require('moment');


/* const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

 */
/* let nombre="";
let total=0;
let promedio=0;
let aux = []

productos.forEach(element => {
    nombre = `${nombre}, ${element.nombre}`
    total += element.precio;

    if (element.precio > mayor) {
        mayor = element.precio;
    }
});
console.log(nombre);
console.log(total);
console.log(total / productos.length);
console.log(mayor);
 */

/* const aux = [];
productos.forEach((e) => {
    //console log del nombre de cada producto
    console.log(e.nombre);
    //push del precio de los productos
    aux.push(e.precio);
});
const menor = Math.min(...aux);
const mayor = Math.max(...aux);

const totalProductos = productos.reduce((acc, e) => acc + e.precio, 0);
const promedio = Math.round(totalProductos / productos.length);
console.log(
    totalProductos,
    `El promedio del valor es $${promedio}`,
    menor,
    mayor
); */

console.log(`hola mundo`)


/* Y obtenga la siguiente información de dicho array
A) Los nombres de los productos en un string separados por comas. (reduce + foreach + for)
B) El precio total (reduce + for + foreach)
C) El precio promedio (reduce + for + foreach)
D) El producto con menor precio (for (aux))
E) El producto con mayor precio (for (aux))
F) Con los datos de los puntos A al E crear un objeto y representarlo por consola
Const resultado = {a: 100, b: res2, c:  res3….}
(Math.trunc)
Aclaración: todos los valores monetarios serán expresados con 2 decimales */




  
let dateOne = moment(2022, 10, 18);
let dateTwo = moment(1981, 10, 16);
  
// Function call
let result = dateOne.diff(dateTwo, 'days') 
  
console.log("No of Days:", result) 