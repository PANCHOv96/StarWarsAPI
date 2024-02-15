// import { PlanetModel } from '../models/local/planet.js'
import { PlanetModel } from '../models/MySql/planet.js'

export class PlanetsController{
    static async getAll(req,res){
        const props = req.query
        const result = await PlanetModel.getAll(props)
        res.json(result)
    }
    static async getById(req,res){
        const { id } = req.params
        const result = await PlanetModel.getById({id})
        res.json(result)
    }
}