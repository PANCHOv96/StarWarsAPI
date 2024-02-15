import { FilmModel } from './models/MySql/film.js'
import { PeopleModel } from './models/MySql/people.js'
import { PlanetModel } from './models/MySql/planet.js'
import { SpecieModel } from './models/MySql/specie.js'
import { StarshipModel } from './models/MySql/starship.js'
import { VehicleModel } from './models/MySql/vehicle.js'
import { createAPP } from './app.js'

const models = {
    FilmModel: FilmModel,
    PeopleModel: PeopleModel,
    PlanetModel: PlanetModel,
    SpecieModel: SpecieModel,
    StarshipModel: StarshipModel,
    VehicleModel: VehicleModel
}

createAPP({models: models , string:'SERVER FUNCIONANDO CON DATOS EN MYSQL'})