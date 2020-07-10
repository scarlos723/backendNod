const express = require('express'); //import express from 'express'
const bodyParser= require('body-parser');


//const router = require('./components/message/network');//permite separar peticiones por cabaceras por metodos o peticiones
const router = require('./network/routes');


var app=express(); //inicializar  nuestra aplicacion express

//primero se debe agragar el bodyParser a la app y despues el router//  
app.use(bodyParser.json()); //Agregar body parser a nuestra app para usarlo  (exculsivamente para json)
app.use(bodyParser.urlencoded({extended: false})); //recomendada false (no objetos complejos)  


//app.use(router); // Agregar router  nuestra aplicacion express
router(app);


app.use('/app',express.static('public')); //ruta de archivos staticos para servir el frontend

app.listen(3000); // puerto en el que se va a poner a escuchar la aplicacion 
console.log('La aplicacione esta escuchando en http://localhost:3000/');