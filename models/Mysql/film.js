import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class FilmModel{
    static async getAll({ title, director, producer, year}){
        try{
            const myQuery = new MyQuery('SELECT * FROM films')
            if(title || director || producer || year){
                myQuery.concatQuery('title LIKE ?',title,'%[VAR]%')
                myQuery.concatQuery('director LIKE ?',director,'%[VAR]%')
                myQuery.concatQuery('producer LIKE ?',producer,'%[VAR]%')
                myQuery.concatQuery('release_date LIKE ?',year,'%[VAR]%')
            }
            const [results, fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            // connection.end()
            return results
        }
        catch(e){
            return {error: 'Problema al encontrar el registro'}
        }
    }
    static async getByid({id}){
        try{
            const myQuery = new MyQuery('SELECT * FROM films WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            return {error: 'Problema al encontrar el registro'}
        }
    }
}


