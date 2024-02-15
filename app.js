import express, { json } from 'express'
import { mainRoutes } from './routes/main.js';
import { createPeoplesRoutes } from './routes/peoples.js';
import { createFilmsRoutes } from './routes/films.js';
import { createPlanetsRoutes } from './routes/planets.js';
import { createSpeciesRoutes } from './routes/species.js';
import { createStarshipRoutes } from './routes/starships.js';
import { createVehiclesRoutes } from './routes/vehicles.js';
import { errorRoutes } from './routes/error.js';
import cors from 'cors'

export function createAPP({models,string}){
    const server = express();
    server.use(json())
    
    server.use(cors())
    server.get('/',mainRoutes)
    server.use('/films',createFilmsRoutes({ FilmModel: models.FilmModel }))
    server.use('/peoples',createPeoplesRoutes({ PeopleModel: models.PeopleModel }))
    server.use('/planets',createPlanetsRoutes({ PlanetModel: models.PlanetModel }))
    server.use('/species',createSpeciesRoutes({ SpecieModel: models.SpecieModel }))
    server.use('/starships',createStarshipRoutes({ StarshipModel: models.StarshipModel }))
    server.use('/vehicles',createVehiclesRoutes({ VehicleModel: models.VehicleModel }))
    server.get('/*',errorRoutes)
    
    const PORT = process.env.PORT ?? 1234
    server.listen(PORT,()=>{
        console.log(string)
    })
}
