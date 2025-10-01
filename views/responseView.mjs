// views/responseView.mjs --> exporta funciones para renderizar las vistas
//Las vistas son objetos JSON que contienen el contenido que se va a renderizar

//Función para renderizar un superhero
export function renderizarSuperheroe(superheroe) {
    //Retornamos el superhero como un string
    return JSON.stringify(superheroe, null, 2);
}

//Función para renderizar una lista de superheroes
export function renderizarListaSuperheroes(superheroes) {
    //Retornamos la lista de superheroes como un string
    return JSON.stringify(superheroes, null, 2);
}