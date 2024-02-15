import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class PlanetModel{
    static async getAll({ name, climate, terrain }){
        try{
            const myQuery = new MyQuery('SELECT * FROM planets')
            if(name || climate || terrain){
                myQuery.concatQuery('name LIKE ?',name,'%[VAR]%')
                myQuery.concatQuery('climate = ?',climate)
                myQuery.concatQuery('terrain LIKE ?',terrain,'%[VAR]%')
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
            const myQuery = new MyQuery('SELECT * FROM planets WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            console.log(e)
            return {error: 'Problema al encontrar el registro'}
        }
    }
}