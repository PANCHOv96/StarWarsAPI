
export class PlanetsController{
    constructor({ PlanetModel }){
        this.model = PlanetModel
    }
    getAll = async (req,res)=> {
        const props = req.query
        const result = await this.model.getAll(props)
        res.json(result)
    }
    getById = async (req,res)=> {
        const { id } = req.params
        const result = await this.model.getById({id})
        res.json(result)
    }
}