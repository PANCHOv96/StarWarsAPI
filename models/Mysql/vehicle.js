import { MyQuery } from './utils/utils.js';
import { connection } from './utils/connection.js';

export class VehicleModel{
    static async getAll({ name, vehicles_class, passengers}){
        try{
            const myQuery = new MyQuery('SELECT * FROM vehicles')
            if(name || vehicles_class || passengers){
                myQuery.concatQuery('name LIKE ?',name,'%[VAR]%')
                myQuery.concatQuery('vehicle_class = ?',vehicles_class)
                myQuery.concatQuery('passengers = ?',passengers)
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
            const myQuery = new MyQuery('SELECT * FROM vehicles WHERE id = ?',[id])
            let [result,fields] = await connection.query(myQuery.queryString,myQuery.varQuery)
            return result.length > 0 ? result : {error: 'Dato no encontrado'};
        }
        catch(e){
            console.log(e)
            return {error: 'Problema al encontrar el registro'}
        }
    }
}