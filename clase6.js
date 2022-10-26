/* const express = require('express')
const app = express();
const port = process.env.PORT | 8080;

app.get('/', (req, res) => {
  res.send('Holaa mundo!!!!!!')
})

app.get('/ruta', (req, res) => {
    res.send('ruta algo')
  })

  app.get('/alumnos', (req, res) => {
    res.json([
        {id: 100, name: "Carla", age:20},
        {id: 101, name: "German", age:30},
        {id: 102, name: "Guille", age:40},
        {id: 103, name: "Sofia", age:50},
])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */




/* const http = require(`http`);
const PORT = 8080;
const server = http.createServer((req, res) => {
  const hora = new Date().getHours();

  if (hora >= 6 && hora <= 12) {
    res.end(`Buenos dias`);
  } else if (hora > 12 && hora <= 19) {
    res.end(`Buenas Tardes`);
  } else {
    res.end(`Buenas Noches`);
  }
});

server.listen(PORT, () => {
  console.log(`Servidor Http escuchando en el puerto http://localhost:${PORT}`);
});
 */