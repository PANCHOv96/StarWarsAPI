import fs from 'fs'

const ENUM_DATA = {
    characters: 'https://swapi.dev/api/people',
    films: 'https://swapi.dev/api/films',
    starships: 'https://swapi.dev/api/starships',
    vechicles: 'https://swapi.dev/api/vehicles',
    species: 'https://swapi.dev/api/species',
    planets: 'https://swapi.dev/api/planets',
}

// Busca los datos de la API y devuelve un arreglo con todos los datos
async function buscarDatos({url},arreglo=[]){
    await fetch(url)
        .then(x => x.json())
        .then(async a => {
        a.results.forEach(data => arreglo.push(data));
        if(a.next !== null) {await buscarDatos({url: a.next},arreglo)}
        return 
        })
    return arreglo
}
  
// Se pasa la URL de la api y se obtienen todos los datos , se guarda en un archivo json para despues  modificarlo
const result = await buscarDatos({url:ENUM_DATA.characters})
console.log('Termino de buscar')
fs.writeFileSync("datosBuscados.json", JSON.stringify(result));