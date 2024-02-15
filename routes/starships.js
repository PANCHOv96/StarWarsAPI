import { Router } from "express";
import { StarshipsController } from "../controllers/starships.js";

export function createStarshipRoutes({ StarshipModel }){
    const starshipsRoutes = Router()
    
    const strarshipsController = new StarshipsController({ StarshipModel })

    starshipsRoutes.get('/' , strarshipsController.getAll)
    starshipsRoutes.get('/:id' , strarshipsController.getById)

    return starshipsRoutes
}