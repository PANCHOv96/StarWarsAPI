
export class SpeciesController{
    constructor({ SpecieModel }){
        this.model = SpecieModel
    }
    getAll = async (req,res) => {
        const props = req.query
        const result = await this.model.getAll(props);
        res.json(result)
    }
    getbyId = async (req,res) => {
        const { id } = req.params
        const result = await this.model.getById({id});
        res.json(result)
    }
}