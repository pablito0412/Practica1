// Importar Express
const express = require('express');

// Inicializar la aplicación Express
const server = express();
// Definir el puerto para el servidor
const PORT = 8080;

const libros =[
  { id: 1 , 
    titulo: "AWS" , 
    autor: "luciano Torres"},
  { id: 2 , 
    titulo: "Base de datos" , 
    autor: "Andy Becerra"},  
  { id: 3, 
    titulo: "Sistemas Operativos" , 
    autor: "Antonio Lema"}  
];

// Ruta para obtener todos los libros

server.get('/libros',(req , res) =>{
    res.json(libros)
} );

// Ruta para buscar libro por ID
server.get('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);

    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
});
// Ruta para agregar un nuevo libro (POST)
server.post('/libros', (req, res) => {
    const { titulo, autor } = req.body;
  
    if (!titulo || !autor) {
      return res.status(400).json({ error: 'Faltan datos: titulo y autor son requeridos' });
    }
  
    const nuevoLibro = {
      id: libros.length + 1,
      titulo,
      autor
    };
  
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
  });



server.get('/', (req, res) => {
    res.send('¡Hola Mundo con Node.js y Express!');
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});