'use strict';

var dbConn = require('../../config/db.config');

var livro = function(livro){
    this.nome = livro.nome;
    this.autor = livro.autor;
    this.anoPublicacao = livro.anoPublicacao;
    this.editora = livro.editora;
    this.crated_at = new Date();
    this.update = new Date();
}

Livro.create = function(newLivro, result){
    dbConn.query("INSERT INTO SET ?", newLivro, function(err, res){
        if(err){
            console.log("error: ", err);

        }else{
            console.log(res.insertId);
            result(null, res.inserId);

        }
    });
};

Livro.findBy = function(id,result){
dbConn.query("select * from livro where id = ? ", id, function(err, res){
    if(err){
        console.log("error: ", err);
        result(null, err);
        }else{
            result(null,res);
        }
});
};

Livro.findAll = function (result){
    dbConn.query("select * from livro", function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);

        }else{
            console.log("livro: ", res);
            result(null, res);
        }
    });
};

dbConn.query("UPDATE livro SET nome=?, autor=?, anoPublicacao=?, editora=?, created_at?, update_at=? where id=?",
[livro.nome, livro.autor, livro.anoPublicacao, livro.editora,id],
 function(err, res){
     if(err){
     console.log("error: ", err);
     result(null, err);
    }
 else{
     result(null, res);
 }}

);



Livro.delete = function(id, result){
    dbConn.query("DELETE FROM livro where id = ? ", [id],function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};



