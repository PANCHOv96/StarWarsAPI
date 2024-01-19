import { Router } from "express";
import { StarshipsController } from "../controllers/starships.js";

export const starshipsRoutes = Router()

starshipsRoutes.get('/' , StarshipsController.getAll)
starshipsRoutes.get('/:id' , StarshipsController.getById)