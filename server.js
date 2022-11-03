const express = require("express");
const { Router } = express;
const multer = require("multer");
const app = express();
const router = require('./router/productsRouter')
    


const { itemsValidate } = require('./utils/validations')
const port = process.env.PORT || 8080;
const Contenedor = require("./container/container");

const data = new Contenedor()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Servidor app escuchando en el puerto http://localhost:${port}`);
});


app.use('/api/products', router);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<h1>Desafio API RESTful</h1> \n <a href="/api/products">Productos</a> \n <a href="/public/index.html">formulario</a> \n');
});

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname +
            '-' +
            Date.now() +
            '.' +
            file.originalname.split('.').pop()
        );
    },
});
const upload = multer({ storage: storage });

app.post('/uploadfile', upload.single('myFile'), (req, res) => {
    const file = req.file;
    if (!file) {
        res.send({ error: true });
    } else {
        res.send({ success: true });
    }
});



