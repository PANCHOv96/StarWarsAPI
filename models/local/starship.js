import { allStarships } from '../../mocks/with-results-starships.js'
import { includesString } from './utils/utils.js'

export class StarshipModel{
    static async getAll({ name }){
        if(name){
            return allStarships.filter(starship => filterStarships(starship,{ name }))
        }
        return allStarships
    }
    static async getById({ id }){
        let result = []
        if(id){
            result = allStarships.filter(starship => starship.id == id)
        } 
        return result.length > 0 ? result : {error: 'Dato no encontrado'};
    }
}

// Esta Funcion Sirve Solo para local 
function filterStarships(obj,{ name }){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.name,name)){
        return true
    }
    return false
}