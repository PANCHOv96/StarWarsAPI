import express, { json } from 'express'
import { mainRoutes } from './routes/main.js';
import { peoplesRoutes } from './routes/peoples.js';
import { filmsRoutes } from './routes/films.js';
import { planetsRoutes } from './routes/planets.js';
import { speciesRoutes } from './routes/species.js';
import { vehiclesRoutes } from './routes/vehicles.js';
import { starshipsRoutes } from './routes/starships.js';
import { errorRoutes } from './routes/error.js';
import cors from 'cors'

const server = express();
server.use(json())

server.use(cors())
server.get('/',mainRoutes)
server.use('/peoples',peoplesRoutes)
server.use('/films',filmsRoutes)
server.use('/planets',planetsRoutes)
server.use('/species',speciesRoutes)
server.use('/vehicles',vehiclesRoutes)
server.use('/starships',starshipsRoutes)
server.get('/*',errorRoutes)

const PORT = process.env.PORT ?? 1234
server.listen(PORT,()=>{
    console.log('SERVER FUNCIONANDO EN PUERTO: ',PORT)
})