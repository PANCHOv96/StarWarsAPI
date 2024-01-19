import { SpecieModel } from '../models/local/specie.js'

export class SpeciesController{
    static async getAll(req,res){
        const props = req.query
        const result = await SpecieModel.getAll(props);
        res.json(result)
    }
    static async getbyId(req,res){
        const { id } = req.params
        const result = await SpecieModel.getById({id});
        res.json(result)
    }
}