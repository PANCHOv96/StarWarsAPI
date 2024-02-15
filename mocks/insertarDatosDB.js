import { allPeople } from './with-results-characters.js'
import { allFilms } from './with-results-films.js'
import { allPlanets } from './with-results-planets.js'
import { allSpecies } from './with-results-species.js'
import { allStarships } from './with-results-starships.js'
import { allVehicles} from './with-results-vehicles.js'

// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'starwars',
  port: 3306
});

class EstructuraInsertarDatos{
    static async insertarCharacters({dato}){
        await connection.query(
            'INSERT INTO characters VALUES (?,?,?,?,?,?,?,?,?)',
            [dato.id,dato.name,dato.height,dato.mass,dato.hair_color,dato.skin_color,dato.eye_color,dato.bitrh_year,dato.gender]
        );
        connection.end()
    }
    static async insertarFilms({dato}){
        await connection.query(
            'INSERT INTO films VALUES (?,?,?,?,?,?,?)',
            [dato.id,dato.title,dato.episode_id,dato.opening_crawl,dato.director,dato.producer,dato.release_date]
        );
        connection.end()
    }
    static async insertarPlanets({dato}){
        await connection.query(
            'INSERT INTO planets VALUES (?,?,?,?,?,?,?,?,?,?)',
            [dato.id,dato.name,dato.rotation_period,dato.orbital_period,dato.diameter,dato.climate,dato.gravity,dato.terrain,dato.surface_water,dato.population]
        );
        connection.end()
    }
    static async insertarStarships({dato}){
        const homewordId = isNaN(dato.homeworld?.split('/')[5]) == true ? null : parseInt (dato.homeworld?.split('/')[5])
        await connection.query(
            'INSERT INTO starships VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [dato.id,dato.name,dato.model,dato.manufacturer,dato.cost_in_credits,dato.length,dato.max_atmosphering_speed,dato.crew,dato.passengers,dato.cargo_capacity,dato.consumables,dato.hyperdrive_rating,dato.MGLT,dato.starship_class]
        );
        connection.end()
    }
    static async insertarVehicles({dato}){
        const homewordId = isNaN(dato.homeworld?.split('/')[5]) == true ? null : parseInt (dato.homeworld?.split('/')[5])
        await connection.query(
            'INSERT INTO vehicles VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
            [dato.id,dato.name,dato.model,dato.manufacturer,dato.cost_in_credits,dato.length,dato.max_atmosphering_speed,dato.crew,dato.passengers,dato.cargo_capacity,dato.consumables,dato.vehicle_class]
        );
        connection.end()
    }
}

function insertarDatos(){
    allPeople.forEach(async (dato)=> await EstructuraInsertarDatos.insertarCharacters({dato}));
    allFilms.forEach(async (dato)=> await EstructuraInsertarDatos.insertarFilms({dato}));
    allPlanets.forEach(async (dato)=> await EstructuraInsertarDatos.insertarPlanets({dato}));
    allSpecies.forEach(async (dato)=> await EstructuraInsertarDatos.insertarSpecies({dato}));
    allStarships.forEach(async (dato)=> await EstructuraInsertarDatos.insertarStarships({dato}));
    allVehicles.forEach(async (dato)=> await EstructuraInsertarDatos.insertarVehicles({dato}));
    console.log('Termino de insertar los datos')
}

insertarDatos()