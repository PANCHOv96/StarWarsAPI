// import { VehicleModel } from '../models/local/vehicle.js'
import { VehicleModel } from '../models/MySql/vehicle.js'

export class VehiclesController{
    static async getAll(req,res){
        const props = req.query;
        const result = await VehicleModel.getAll(props)
        res.json(result)
    }
    static async getById(req,res){
        const { id } = req.params;
        const result = await VehicleModel.getById({id})
        res.json(result)
    }
}