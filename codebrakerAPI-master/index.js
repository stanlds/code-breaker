'use strict'

var app = require('./app');
const PORT = process.env.PORT || 5000;

//Crear servidor y ponerme a escuchar peticiones http
app.listen(port, ()=>{
        console.log('Servidor corriendo en http://localhost:'+PORT);
})
