//importar el modulo http
import http from 'http';

// importando expressjs
import express from 'express';

//cear una instancia de epress
const app = express(); // (req. res) => {Codigo}

//registrar nuestro primer middleware
app.use((req, res, next ) => {
    console.log("Ejecutando el Middlware 1");

//invocando al siguiente middlware
next();
});


app.use((req, res, next) => {
console.log(`${req.method} - ${req.url}`);
next();
});

app.use((req, res) => {
    console.log("Respondiendo al cliente");
    res.send(`
        <h1>Welcome to express</h1>
        <p>This is my awesome app</p>
        `);
    });

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