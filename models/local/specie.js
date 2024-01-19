import { allSpecies } from '../../mocks/with-results-species.js'
import { includesString } from '../../utils/utils.js'

export class SpecieModel{
     static async getAll({ name, language, designation }){
        if(name || language || designation){
            return allSpecies.filter(specie => filterSpecies(specie,{ name, language, designation }))
        } 
        return allSpecies
     }
     static async getById({id}){
         return {id}
     }
}

// Esta Funcion Sirve Solo para local 
function filterSpecies(obj,{ name, language, designation }){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.name,name) && includesString(obj.language, language) 
    && includesString(obj.designation, designation)){
        return true
    }
    return false
}