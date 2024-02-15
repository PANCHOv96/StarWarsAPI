import { FilmModel } from './models/local/film.js'
import { PeopleModel } from './models/local/people.js'
import { PlanetModel } from './models/local/planet.js'
import { SpecieModel } from './models/local/specie.js'
import { StarshipModel } from './models/local/starship.js'
import { VehicleModel } from './models/local/vehicle.js'
import { createAPP } from './app.js'

const models = {
    FilmModel: FilmModel,
    PeopleModel: PeopleModel,
    PlanetModel: PlanetModel,
    SpecieModel: SpecieModel,
    StarshipModel: StarshipModel,
    VehicleModel: VehicleModel
}

createAPP({ models: models , string:'SERVER FUNCIONANDO CON DATOS EN JSON' })