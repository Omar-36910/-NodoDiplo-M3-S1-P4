//superheroesController.mjs nos sirve para controlar las peticiones HTTP

//Importamos las funciones de los servicios:
// controllers/superheroesController.mjs
import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
//Importamos las vistas
import { renderizarSuperheroe, renderizarListaSuperheroes }
 from '../views/responseView.mjs';

 //Exportamos las funciones, para que puedan ser llamadas
 export function obtenerSuperheroePorIdController(req, res) {
    //Obtenemos el id del superheroe
    const { id } = req.params;
    //Obtenemos el superheroe
    const superheroe = obtenerSuperheroePorId(parseInt(id));
    //Si existe, devolvemos el superheroe
    if (superheroe) {
        //Renderizamos el superheroe
        res.send(renderizarSuperheroe(superheroe));
    } else {
        //Si no existe, devolvemos un mensaje de error
        res.status(404).send({ mensaje: "Superheroe no encontrado"});
    }
 }

 //Función para buscar superheroes por atributo
 export function buscarSuperheroesPorAtributoController(req, res) {
    //Obtenemos el atributo y el valor
    const { atributo, valor } = req.params;
    //Obtenemos los superheroes
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    //Si hay superheroes, renderizamos la lista
    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        //Si no hay superheroes, devolvemos un mensaje de error
        res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo"});
    }
 }

 // Función para obtener superheroes mayores de 30
 export function obtenerSuperheroesMayoresDe30Controller(req, res) {
    //Obtenemos los superheroes mayores de 30
    const superheroes = obtenerSuperheroesMayoresDe30();
    //Renderizamos la lista
    res.send(renderizarListaSuperheroes(superheroes));
 }
 