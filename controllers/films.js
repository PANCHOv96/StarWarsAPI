// import { FilmModel } from '../models/local/film.js'
import { FilmModel } from '../models/MySql/film.js'

export class FilmsController{
    static async getAll(req,res) {
        const props = req.query
        const result = await FilmModel.getAll(props);
        res.json(result)
    }

    static async getById(req,res){
        const { id } = req.params
        const result = await FilmModel.getByid({id});
        res.json(result)
    }
}