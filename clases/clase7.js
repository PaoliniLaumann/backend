const express = require("express");
const Container = require("./container");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
  { id: 100, nombre: "german", edad: 40 },
  { id: 101, nombre: "Daniel", edad: 20 },
  { id: 102, nombre: "Jose", edad: 30 },
  { id: 103, nombre: "Micaela", edad: 33 },
]; 

/* app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});  */

//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!)
app.get("/api/usuarios", (req, res) => {
  const { query } = req;
 
  if (query?.nombre) {
    const usuarioFiltrado = usuarios.filter(
      (usuario) => usuario.nombre == query.nombre
    );
    return res.json(usuarioFiltrado);
  }
  res.json(usuarios)
});

//POST CON BODY (SIN ID!!)
app.post("/api/usuarios", (req, res) => {
  const { body } = req;
  usuarios.push(body);
  res.json(`ok`);
});

//GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
app.get("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id);
  if (usuarioEncontrado) {
    res.json({ success: true, user: usuarioEncontrado });
  } else {
    res.json({ error: true, msg: `no encontrado` });
  }
});

//PUT CON ID PARAMS SIEMPRE y BODY!
app.put("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const indiceEncontrado = usuarios.findIndex((usuario) => usuario.id == id);
  if (indiceEncontrado >= 0) {
    usuarios[indiceEncontrado] = body;
    res.json({ success: true, user: body });
  } else {
    res.json({ error: true, msg: `no encontrado` });
  }
});

//DELETE CON ID PARAMS SIEMPRE
app.delete("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarios = usuarios.filter((usuario)=> usuario.id !=id);
  res.json({success:true, usuarios: usuarios.length})
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
 

//--------------------------------------------------------Desafio en clase:------------------------------------------------------------------------------------------------------------
/* Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
Aclaraciones:
- En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
{ error: "El parámetro no es un número" } cuando el parámetro no es numérico
{ error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.
 */
/* const frase = "hola mundo como estan";

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/letras/:num", (req, res, next) => {
  const { num } = req.params;
  if (isNaN(num)) {
    res.json({ error: "El parámetro no es un número" });
  }else if (num >= frase.length){
    res.json({ error: "El parámetro está fuera de rango" });    
  } else {
    res.json({ frase: frase[num] });  
  }  
});

app.get("/api/palabras/:num", (req, res, next) => {
  const { num } = req.params;
  const palabras = frase.split(" ");
  if (isNaN(num)) {
    res.json({ error: "El parámetro no es un número" });
  }else if (num >= palabras.length+1){
    res.json({ error: "El parámetro está fuera de rango" });    
  }  else {
    res.json({ palabras: palabras[parseInt(num - 1)] });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
 */