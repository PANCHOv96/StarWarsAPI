import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class PeopleModel{
    static async getAll({ name, gender }){
        try{
            const myQuery = new MyQuery('SELECT * FROM characters')
            if(name || gender ){
                myQuery.concatQuery('name LIKE ?',name,'%[VAR]%')
                myQuery.concatQuery('gender = ?',gender)
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
            const myQuery = new MyQuery('SELECT * FROM characters WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            console.log(e)
            return {error: 'Problema al encontrar el registro'}
        }
    }
}
