//superheroesService.mjs nos sirve para obtener los superheroes

//Importamos la clase SuperheroesRepository para obtener los superheroes
import SuperheroesRepository from '../repository/superheroesRepository.mjs';

//Obtenemos la instancia de la clase SuperheroesRepository
const repository = new SuperheroesRepository();

//Función para obtener un superhero por su id
export function obtenerSuperheroePorId(id) {
    //Obtenemos todos los superheroes
    const superheroes = repository.obtenerTodos();
    //Filtramos los superheroes por su id
    //find es un método de Array que devuelve el primer elemento que cumpla con la condición
    return superheroes.find(hero => hero.id === id);
}

//Función para buscar superheroes por atributo
export function buscarSuperheroesPorAtributo(atributo, valor) {
    //Obtenemos todos los superheroes
    const superheroes = repository.obtenerTodos();
    //Filtramos los superheroes por su atributo
    //filter es un método de Array que devuelve un nuevo array con los elementos que cumplan con la condición
    return superheroes.filter(hero =>
        //Convierte el valor del atributo a minúsculas y luego lo comparamos con el valor buscado
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
    );
}

//Función para obtener superheroes mayores de 30
export function obtenerSuperheroesMayoresDe30() {
    //Obtenemos todos los superheroes
    const superheroes = repository.obtenerTodos();
    //Filtramos los superheroes mayores de 30
    return superheroes.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
    );
}