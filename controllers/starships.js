import { StarshipModel } from "../models/local/starship.js"

export class StarshipsController{
    static async getAll(req,res){
        const props = req.query
        const result = await StarshipModel.getAll(props)
        res.json(result)
    }
    static async getById(req,res){
        const { id } = req.params
        const result = await StarshipModel.getById({ id })
        res.json(result)
    }
}