import { Router } from 'express'
import { PlanetsController } from '../controllers/planets.js'

export function createPlanetsRoutes({ PlanetModel }){
    const planetsRoutes = Router()
    
    const planetController = new PlanetsController({ PlanetModel })
    
    planetsRoutes.get('/', planetController.getAll)
    planetsRoutes.get('/:id', planetController.getById)

    return planetsRoutes
}