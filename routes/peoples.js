import { Router } from 'express'
import { PeoplesController } from '../controllers/peoples.js'


export function createPeoplesRoutes({PeopleModel}){
    const peoplesRoutes = Router()
    
    const peoplesController = new PeoplesController({PeopleModel})

    peoplesRoutes.get('/', peoplesController.getAll)
    peoplesRoutes.get('/:id', peoplesController.getById)

    return peoplesRoutes
}
