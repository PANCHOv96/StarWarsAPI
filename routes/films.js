import { Router } from "express";
import { FilmsController } from '../controllers/films.js'

export const filmsRoutes = Router()

filmsRoutes.get('/', FilmsController.getAll)
filmsRoutes.get('/:id', FilmsController.getById)