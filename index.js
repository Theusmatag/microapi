const express = require ('express');
const cors = require ('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express ();



app.use(cors());
app.use(express.json());

const port = 9000;

app.get('/',(req, res)=>{
    res.send("olá mundo !");
});

app.listen(port, ()=> {
    console.log('o servidor está executando na porta ${port}!');
});
