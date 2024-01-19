import { Router } from 'express'
import { SpeciesController } from '../controllers/species.js'

export const speciesRoutes = Router()

speciesRoutes.get('/', SpeciesController.getAll)
speciesRoutes.get('/:id', SpeciesController.getbyId)