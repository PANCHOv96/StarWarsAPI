import express, { json } from 'express'
import { peoplesRoutes } from './routes/peoples.js';
import { filmsRoutes } from './routes/films.js';
import { planetsRoutes } from './routes/planets.js';
import { speciesRoutes } from './routes/species.js';
import { starshipsRoutes } from './routes/starships.js';
import cors from 'cors'

const server = express();
server.use(json())

server.use(cors())
server.use('/peoples',peoplesRoutes)
server.use('/films',filmsRoutes)
server.use('/planets',planetsRoutes)
server.use('/species',speciesRoutes)
server.use('/starships',starshipsRoutes)

const PORT = process.env.PORT ?? 1234
server.listen(PORT,()=>{
    console.log('SERVER FUNCIONANDO EN PUERTO: ',PORT)
})