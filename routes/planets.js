import { Router } from 'express'
import { PlanetsController } from '../controllers/planets.js'

export const planetsRoutes = Router()

planetsRoutes.get('/', PlanetsController.getAll)
planetsRoutes.get('/:id', PlanetsController.getById)