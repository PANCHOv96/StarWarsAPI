import { Router } from "express";
import { VehiclesController } from "../controllers/vehicles.js";


export function createVehiclesRoutes({ VehicleModel }){
    const vehiclesRoutes = Router()

    const vehiclesController = new VehiclesController({ VehicleModel })
    
    vehiclesRoutes.get('/',vehiclesController.getAll)
    vehiclesRoutes.get('/:id',vehiclesController.getById)

    return vehiclesRoutes
}