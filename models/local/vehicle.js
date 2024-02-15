import { allVehicles } from '../../mocks/with-results-vehicles.js'
import { includesString } from './utils/utils.js'

export class VehicleModel{
    static async getAll({ name, vehicles_class, passengers}){
        if(name || vehicles_class || passengers){
            return allVehicles.filter(vehicle => filterVehicles(vehicle,{ name, vehicles_class, passengers}))
        } 
        return allVehicles;
    }
    static async getById({ id }){
        let result = []
        if(id){
            result = allVehicles.filter(vehicle => vehicle.id == id)
        } 
        return result.length > 0 ? result : {error: 'Dato no encontrado'};
    }
}

// Esta Funcion Sirve Solo para local 
function filterVehicles(obj,{ name, vehicles_class, passengers }){
    // todos los string son correctos o en dicho caso no existe una variable a comparar retorna TRUE
    if(includesString(obj.name,name) && includesString(obj.vehicles_class, vehicles_class) 
    && includesString(obj.passengers, passengers)){
        return true
    }
    return false
}