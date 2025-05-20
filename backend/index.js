// Importar Express
const express = require('express');
const cors = require('cors');

// Inicializar la aplicación Express
const server = express();
server.use(cors());

// Definir el puerto para el servidor
const PORT = 8080;

server.get('/ping', (req, res) => {
    res.json({message: 'pong-Chulde' })
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
