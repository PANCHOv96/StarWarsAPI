
export class PeoplesController {
    constructor({ PeopleModel }){
        this.model = PeopleModel
    }
    getAll = async (req,res)=> {
        const props = req.query
        const response = await this.model.getAll(props)
        res.json(response)
    }
    getById = async (req,res)=>{
        const { id } = req.params
        const response = await this.model.getById({id})
        res.json(response)
    }
}