// repository/superheroesRepository.mjs --> Clase que se encarga de obtener todos los superheroes
//Importamos dependencias
import fs from 'fs';
import path from 'path';
//fileURLToPath es una función de Node.js que convierte una URL de archivo en una ruta de archivo
import { fileURLToPath } from 'url';
//Importamos la clase SuperheroesDataSource
import SuperheroesDataSourse from './superheroesDataSource.mjs';

//Obtenemos el directorio actual
const __filename = fileURLToPath (import.meta.url);
//Obtenemos el directorio padre
const __dirname  = path.dirname (__filename);

//Clase que se encarga de obtener todos los superheroes
//Extendemos la clase SuperheroesDataSource para que herede sus métodos
export default class SuperheroesFileRepository extends SuperheroesDataSourse {
    //Atributo que almacena la ruta del archivo JSON
    constructor() {
        //Llamamos al constructor de la superclase
        super();
        //Obtenemos la ruta del archivo JSON
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }
    //Metodo que obtiene todos los superheroes
    obtenerTodos() {
        //Leemos el archivo JSON
        //fs.readFileSync es una función de Node.js que lee un archivo y devuelve su contenido como un string
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);  // Convierte el archico JSON en un array de objetos JS
    }
}