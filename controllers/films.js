
export class FilmsController{
    constructor({FilmModel}){
        this.model = FilmModel;
    }

    getAll = async (req,res) => {
        const props = req.query
        const result = await this.model.getAll(props);
        res.json(result)
    }

    getById = async (req,res)=> {
        const { id } = req.params
        const result = await this.model.getByid({id});
        res.json(result)
    }
}