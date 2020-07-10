
const express = require('express');

const response = require('../../network/response'); //ir dos carpetas arriba para acceder al response.js

const router = express.Router();

router.get('/', function(req,res){ // ruta metodo get
    console.log(req.headers) //Mostrar la cabecera en consola
    res.header({
        "custom-header":"Nuestra cabecera custom personalizada",
    });

    res.send('Obteniendo lista de mensajes');
});

router.post('/', function(req,res){ //ruta metodo post
    console.log(req.body);//parametros por body edad
    console.log(req.query);//parametros por query 
    res.send('El nensaje ' + req.body.text + ' fue añadido');
});

router.delete('/', function(req,res){ //ruta metodo delete
    
    if(req.query.error == "ok"){
        response.error(req,res,'Error simulado',400);
    } 
    //Se puede enviar una respuesta vacia plana con datos o extructurada
    res.status(201).send({error:'',body: 'Creado correctamente'});  //sepuede enviar un estado, en este caso 201
});

router.put('/',function(req,res){
    response.success(req,res);
});

module.exports = router;