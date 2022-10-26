const express = require("express");
const Container = require("./container");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


let usuarios = [
  { id: 100, nombre: "German" },
  { id: 101, nombre: "Daniel" },
  { id: 102, nombre: "Jose" },
  { id: 103, nombre: "Micaela" },
  
];

app.get("/api/usuarios", (req, res) => {
   res.json(usuarios);
});

//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!)
app.get('/', (req, res) => {
    const { query } = req;
  });
  
  //GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
  app.get('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
  });
  
  //POST CON BODY (SIN ID!!)
  app.post('/', (req, res) => {
    const { body } = req;
  });
  
  //PUT CON ID PARAMS SIEMPRE y BODY!
  app.put('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
   
  });
  
  //DELETE CON ID PARAMS SIEMPRE
  app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;  
  });
  
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
