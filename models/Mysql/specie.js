import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class SpecieModel{
    static async getAll({ name, language, designation }){
        try{
            const myQuery = new MyQuery('SELECT * FROM species')
            if(name || language || designation){
                myQuery.concatQuery('name LIKE ?',name,'%[VAR]%')
                myQuery.concatQuery('language LIKE ?',language,'%[VAR]%')
                myQuery.concatQuery('designation = ?',designation)
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
            const myQuery = new MyQuery('SELECT * FROM species WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            console.log(e)
            return {error: 'Problema al encontrar el registro'}
        }
    }
}