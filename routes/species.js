import { Router } from 'express'
import { SpeciesController } from '../controllers/species.js'

export function createSpeciesRoutes({ SpecieModel }){
    const speciesRoutes = Router()

    const speciesController = new SpeciesController({ SpecieModel });
    
    speciesRoutes.get('/', speciesController.getAll)
    speciesRoutes.get('/:id', speciesController.getbyId)

    return speciesRoutes;
}