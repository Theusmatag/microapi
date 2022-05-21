const express = require ('express');
const cors = require ('cors');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(express.json());

const port = 9000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.send("olá mundo !");
});

// const livroRoutes = require('./src/routes/livro.routes');

const routesLivro = require('./src/routes/livro.routes');

app.use('/api/v1/livros', routesLivro);

app.listen(port, ()=> {
    console.log('o servidor está executando na porta ${port}!');
});
