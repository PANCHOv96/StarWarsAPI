import { Router } from "express";
import { FilmsController } from '../controllers/films.js'

export function createFilmsRoutes({FilmModel}){
    const filmsRoutes = Router()
    
    const filmController = new FilmsController({FilmModel})
    
    filmsRoutes.get('/', filmController.getAll)
    filmsRoutes.get('/:id', filmController.getById)

    return filmsRoutes;
}