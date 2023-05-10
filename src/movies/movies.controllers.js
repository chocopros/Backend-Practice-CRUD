const uuid = require('uuid')

const Movies = require('../models/movies.models');

//> traer todas las peliculas
const getAllMovies = async() => {
    const allMovies = await Movies.findAll() 
    return allMovies
};


//> Create Information
const createMovie = async(data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })
    return newMovie
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





//>TEST CREATE
/*
createMovie({
    name: 'MARIO',
    genre: 'fantasia',
    duration: 120,
    releaseDate: '2023/04/30'
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
//>TEST GET ALL MOVIES
console.log(getMovieById('81435165-48d1-4df1-861d-0e1115b1f6e4')
    .then(r => r ? console.log(r.dataValues) : console.log(">>> ID No encontrado <<<"))
    .catch(err => console.log(err))
);