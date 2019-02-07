'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//conexion database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social')
    .then(()=>{
        console.log("La conexion a la base de datps mean social se ha realizado")
        //crear servidor
        app.listen(port, () =>{
            console.log("Servidor corriendo en local host 3800");
        });
    }).catch(err => console.log(err));
