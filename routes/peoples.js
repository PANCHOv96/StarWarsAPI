import { Router } from 'express'
import { PeoplesController } from '../controllers/peoples.js'

export const peoplesRoutes = Router()

peoplesRoutes.get('/', PeoplesController.getAll)
peoplesRoutes.get('/:id', PeoplesController.getById)