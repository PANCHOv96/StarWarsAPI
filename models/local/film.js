import { allFilms } from '../../mocks/with-results-films.js'
import { includesString } from '../../utils/utils.js'

export class FilmModel{
    static async getAll({ title, director, producer, year}){
        if(title || director || producer || year){
            return allFilms.filter( film => filterFilms(film,{title,director,producer,year}))
        }
        return allFilms
    }
    static async getByid({id}){
        let result = []
        if(id){
            result = allFilms.filter(film => film.id == id)
        } 
        return result.length > 0 ? result : {error: 'Dato no encontrado'};
    }
}

// Esta Funcion Sirve Solo para local 
function filterFilms(obj,{title,director,producer,year}){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.title,title) && includesString(obj.director, director) 
    && includesString(obj.producer, producer) && includesString(obj.year,year)){
        return true
    }
    return false
}