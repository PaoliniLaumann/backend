/* let x = null;
let nombre= undefined;

console.log(typeof x);
console.log(typeof nombre);
 */

//-------------------------------------------------------------------

//CALLBACK
/* function escribirYLoguear(texto, callbackParaLoguear) {
    // simulamos que escribimos en un archivo!
    console.log(texto)
    // al finalizar, ejecutamos el callback
    callbackParaLoguear('archivo escrito con éxito')
   }
   
   escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
    const fecha = new Date().toLocaleDateString()
    console.log(`${fecha}: ${mensajeParaLoguear}`)
   })

   //-----------------------------------------------------------------
   const pasaraminuscula = (a, b, func) => {
        func();
        console.log(a+b)
   }
   pasaraminuscula(10,20, ()=> console.log("German"))
 */
//------------------------------------------------------------------

//demostramos que const es constante pero puede mutar
/* let nombre = "GERMAN"
   nombre = nombre.toLowerCase();

   console.log(typeof nombre);

   const persona = {nombre: "German", edad: "40"}

   persona.edad++;
   persona.edad++;
   persona.nombre= "Javier";
   console.log(persona) */

/*  const algo = (persona) => {
    console.log("Hola " + persona);
   }

   algo("German");
   algo("Javier"); */

//-----------------------------------------------------------------

// Closure

/* const algo1 = () => {
        console.log("entre a algo 1");
        const algo2 =() => {
            console.log("entre a algo 2");
        }
        algo2();
   }   
   algo1() */

/*   const algo1 = () => {
    let x = 10;
    const algo2 =() => {
        let x = 20;
        console.log(x);
    }
    algo2();
}   

algo1(); */

//------------------------------------------------------------------
//Clases y metodos

/* class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; //propiedad
    this.edad = edad;
  }
  saludoCompleto() {
    console.log(`Hola me llamo ${this.nombre}`); //metodo
  }

  saludoEdad() {
    console.log(`Tengo ${this.edad}`);
  }
}

const persona1 = new Persona("German", 40);

console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludoCompleto();
persona1.saludoEdad(); */

//Variable = propiedad
//funcion =  metodo

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
   console.log(this.mascotas.length);
  }

  addBook(nombre, autor) {
    this.libros.push(nombre, autor);
  }

  getBookNames() {
          console.log(this.libros.map(item => item.nombre));    
  }
}

const usuario1 = new Usuario ("German", "Paolini")

usuario1.getFullName()
usuario1.addMascota(`perro`); 
usuario1.addMascota(`gato`);
console.log(usuario1.mascotas)
usuario1.countMascotas()
usuario1.addBook({nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'})
console.log(usuario1.libros);
usuario1.getBookNames()
