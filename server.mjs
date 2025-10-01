// Server.mjs --> nos sirve para levantar el servidor
//Importamos las dependencias
import express from 'express';
//Importamos las funciones de los controladores
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller}
from './controllers/superheroesController.mjs';

//Creamos la aplicación Express
const app = express();
//Definimos el puerto del servidor
const PORT = 3005;

//Las rutas del servidor se definen aquí
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ${PORT}');
});