const uuid = require('uuid')

const Movies = require('../models/movies.models');

//> traer todas las peliculas
const getAllMovies = async() => {
    const allMovies = await Movies.findAll() 
    return allMovies
};

/*
console.log(getAllMovies
    .then(r => console.log(r))
    .catch(err => console.log(err))
);
*/

//> Create Information
const createMovie = async(data) => {
    const newMovie = await Movies.create({
        id: uuid.v4,
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })
    return newMovie
};

