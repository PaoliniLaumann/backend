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
    return this.mascotas.push(mascota);
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

const usuario1 = new Usuario("German", "Paolini");
usuario1.getFullName();
usuario1.addMascota(`perro`);
usuario1.addMascota(`gato`);
console.log(usuario1.mascotas);
usuario1.countMascotas();
usuario1.addBook(
  { nombre: "El señor de las moscas", autor: "William Golding" },
  { nombre: "Fundacion", autor: "Isaac Asimov" }
);
console.log(usuario1.libros);
usuario1.getBookNames();
