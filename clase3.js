/* const sumar = (a, b) =>  a + b; 

const sumado = sumar(10, 20);

console.log(sumado); */

/* function algo (unnUMERO, unArray, unaFuncion){
    unnUMERO++;
    console.log(unnUMERO)
    unArray.push("agrego");
    console.log(unArray);
    const resultado= unaFuncion(10,20);
    console.log(resultado)
}

algo(10, [1,2,3], (a, b) =>  a + b);
 */

function escribirYLoguear(texto, callbackParaLoguear) {
    // simulamos que escribimos en un archivo!
    console.log(texto)
    // al finalizar, ejecutamos el callback
    callbackParaLoguear('archivo escrito con éxito')
   }
   
   escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
    const fecha = new Date().toLocaleDateString()
    console.log(`${fecha}: ${mensajeParaLoguear}`)
   })
   