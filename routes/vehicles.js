import { Router } from "express";
import { VehiclesController } from "../controllers/vehicles.js";

export const vehiclesRoutes = Router()

vehiclesRoutes.get('/',VehiclesController.getAll)
vehiclesRoutes.get('/:id',VehiclesController.getById)