const uuid = require('uuid')

const Movies = require('../models/movies.models');

//> Create Information
const createMovie = async(data) => {
    const uuidCreate = uuid.v4()
    const newMovie = await Movies.create({
        id: uuidCreate,
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate,
        link: `http://127.0.0.1:9000/movies/${uuidCreate}`
    })
    return newMovie
};


//> traer todas las peliculas
const getAllMovies = async() => {
    const allMovies = await Movies.findAll() 
    return allMovies
};



//> Traer Pelicula en especifico
const getMovieById = async(id) => {
    const movieId = await Movies.findOne({
        where: {
            id: id
            //name: Mario
        }
    });
    return movieId
};

//> Editar una pelicula
const editMovie = async(id, data) => {
    
    const movieId = await Movies.findOne({
        where: {
            id: id
            //name: Mario
        }
    });

    if (!movieId) {
        return null;
    } else {
        const response = await Movies.update(data, {
            where: {
                id: id
            }
        });
        return response;
    }
};

//> Elminar una pelicula por ID

const destroyMovie = async(id) => {

    const movieId = await Movies.findOne({
        where: {
            id: id
            //name: Mario
        }
    });

    if (!movieId) {
        return null
    } else {
        const response = await Movies.destroy({
            where: {
                id
            }
        })
        return response
    };
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    editMovie,
    destroyMovie
}




//! TEST CREATE
//> TEST CREATE MOVIE
/*
createMovie({
    name: 'SCAR FACE',
    genre: 'crimen',
    duration: 160,
    releaseDate: '1988/02/21'
})
    .then(r => console.log(r))
    .catch( err => console.log(err))
*/

//>TEST GET ALL MOVIES
/*
console.log(getAllMovies()
    .then(r => console.log(r))
    .catch(err => console.log(err))
);
*/

//>TEST GET ID MOVIES
/*
console.log(getMovieById('7be32ce6-05c7-4783-befb-08e0f8d522f7')
    .then(r => r ? console.log(r) : console.log(r))
    .catch(err => console.log(err))
);
*/

//>TEST EDICT MOVIE
/*
editMovie('167d4821-052f-4139-8290-690f8c21a444',{releaseDate: '2023-03-26'})
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/

//> TEST DELETE MOVIE
/*
destroyMovie('267d4821-052f-4139-8190-690f8c21a444')
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/
