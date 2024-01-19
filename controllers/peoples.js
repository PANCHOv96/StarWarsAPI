import { PeopleModel } from "../models/local/people.js"

export class PeoplesController {
    static async getAll(req,res) {
        const props = req.query
        const response = await PeopleModel.getAll(props)
        res.json(response)
    }
    static async getById(req,res){
        const { id } = req.params
        const response = await PeopleModel.getById({id})
        res.json(response)
    }
}