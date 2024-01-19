import { allPlanets } from '../../mocks/with-results-planets.js'
import { includesString } from '../../utils/utils.js'

export class PlanetModel{
    static async getAll({ name, climate, terrain }){
        if(name || climate || terrain){
            return allPlanets.filter(planet => filterFilms(planet,{ name, climate, terrain }) )
        }
        return allPlanets
    }
    static async getById({id}){
        return {id}
    }
}

// Esta Funcion Sirve Solo para local 
function filterFilms(obj,{ name, climate, terrain }){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.name,name) && includesString(obj.climate, climate) 
    && includesString(obj.terrain, terrain)){
        return true
    }
    return false
}