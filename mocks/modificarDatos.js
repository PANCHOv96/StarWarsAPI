import fs from 'fs'

// Con esta clase puedo estructurar el obj como yo quiero para luego guardalo en mi bd 
// tiene funciones statics para que no sea necesario instanciar la clase
class Estructura{
    static vehicles(obj,index){
        return {
            id: (index+1),
            name: obj.name,
            manufacturer: obj.manufacturer,
            cost_in_credits: obj.cost_in_credits,
            length: obj.length,
            max_atmosphering_speed: obj.max_atmosphering_speed,
            crew: obj.crew,
            passengers: obj.passengers,
            cargo_capacity: obj.cargo_capacity,
            consumables: obj.consumables,
            vehicle_class: obj.vehicle_class,
        }
    }
    static starships(obj,index){
        return {
            id: (index+1),
            name: obj.name,
            model: obj.model,
            manufacturer: obj.manufacturer,
            cost_in_credits: obj.cost_in_credits,
            length: obj.length,
            max_atmosphering_speed: obj.max_atmosphering_speed,
            crew: obj.crew,
            passengers: obj.passengers,
            cargo_capacity: obj.cargo_capacity,
            consumables: obj.consumables,
            hyperdrive_rating: obj.hyperdrive_rating,
            MGLT: obj.MGLT,
            starship_class: obj.starship_class,
        }
    }
    static species(obj,index){
        return {
            id: (index+1),
            name: obj.name,
            classification: obj.classification,
            designation: obj.designation,
            average_height: obj.average_height,
            skin_colors: obj.skin_colors,
            hair_colors: obj.hair_colors,
            eye_colors: obj.eye_colors,
            average_lifespan: obj.average_lifespan,
            homeworld: obj.homeworld,
            language: obj.language,
        }
    }
    static planets(obj,index){
        return {
            id: (index+1),
            name: obj.name,
            rotation_period: obj.rotation_period,
            orbital_period: obj.orbital_period,
            diameter: obj.diameter,
            climate: obj.climate,
            gravity: obj.gravity,
            terrain: obj.terrain,
            surface_water: obj.surface_water,
            population: obj.population,
        }
    }
    static films(obj,index){
        return {
            id: (index+1),
            title: obj.title,
            episode_id: obj.episode_id,
            opening_crawl: obj.opening_crawl,
            director: obj.director,
            producer: obj.producer,
            release_date: obj.release_date,
        }
    }
    static characters(obj,index){
        return {
            id: (index+1),
            name: obj.name,
            height: obj.height,
            mass: obj.mass,
            hair_color: obj.hair_color,
            skin_color: obj.skin_color,
            eye_color: obj.eye_color,
            birth_year: obj.birth_year,
            gender: obj.gender == 'female' ? 'women' : obj.gender,
        }
    }
}

// Modifica los Datos que llegan desde la API que fueron guardados previamente y se modifican dependiendo la Estructura
function modificarDatos({datos},estructuraNueva){
  const result = datos.map((x,index) => estructuraNueva(x,index))
  fs.writeFileSync("datosBuscados.json", JSON.stringify(result));
  console.log('Termino de modificar')
}

let datos = fs.readFileSync("datosBuscados.json");
datos = JSON.parse(datos);


modificarDatos({datos},Estructura.vehicles)





    