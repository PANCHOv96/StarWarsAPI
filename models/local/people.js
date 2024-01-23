import { allPeople } from '../../mocks/with-results-characters.js'
import { includesString } from '../../utils/utils.js'

export class PeopleModel{
    static async getAll({ name, gender, species }){
        if (name || gender || species) return allPeople.filter(
            people => filterPeoples(people,{name, gender, species})
        )
        return allPeople;
    }
    static async getById({id}){
        let result = []
        if(id){
            result = allPeople.filter(people => people.id == id)
        } 
        return result.length > 0 ? result : {error: 'Dato no encontrado'};
    }
}

// Esta Funcion Sirve Solo para local 
function filterPeoples(obj,{name, gender, species}){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.name,name) && includesString(obj.gender, gender) 
    && includesString(obj.species.name, species)){
        return true
    }
    return false
}