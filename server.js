const express = require('express');
const Container = require('./container');
const app = express();
const PORT = process.env.PORT || 8080;

const productoContainer = new Container()

const randomFunction = (limite) => {
    return parseInt(Math.random() * limite)
}

app.get('/', (req, res) => {
    res.send("<h1 style='color:black'>Servidor express</h1> <a href='/data'>PRODUCTOS</a> <a href='/productoRandom'>PRODUCTOS RANDOM</a>")
})


app.get("/data", async (req, res) => {
     res.json (await productoContainer.getAll())       

})


app.get("/productoRandom", async (req, res) => {
  const db =  await productoContainer.getAll()  
  res.json (productoContainer.getById(randomFunction(db.length)))      
});


app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})