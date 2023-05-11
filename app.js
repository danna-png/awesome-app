//importar el modulo http
import http from 'http';

// importando expressjs
import express from 'express';

//cear una instancia de epress
const app = express(); // (req. res) => {Codigo}

//creando el servidor
const server = http.createServer(app);

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//arrancar el server
server.listen(port, ip, ()=> { 
    console.log(" Sirviendo en http://localhost:3000");
    console.log(`Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});