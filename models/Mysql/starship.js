import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class StarshipModel{
    static async getAll({ name }){
        try{
            const myQuery = new MyQuery('SELECT * FROM starships')
            if(name){
                myQuery.concatQuery('name LIKE ?',name,'%[VAR]%')
            }
            const [results, fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            // connection.end()
            return results
        }
        catch(e){
            return {error: 'Problema al encontrar el registro'}
        }
    }
    static async getById({id}){
        try{
            const myQuery = new MyQuery('SELECT * FROM starships WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            console.log(e)
            return {error: 'Problema al encontrar el registro'}
        }
    }
}