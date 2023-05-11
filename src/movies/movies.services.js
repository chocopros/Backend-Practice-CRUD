const moviesControllers = require('./movies.controllers');

const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
        .then( r => res.status(200).json({
            data: 'http://127.0.0.1:9000/movies',
            Count: r.length,
            response: r
        }))
        .catch(err => res.status(400).json({ message: err.message }));
};

const postMovie = (req,res) => {
    const  data = req.body;
    if (data.name && data.genre && data.duration && data.releaseDate ) {
        moviesControllers.createMovie(data)
            .then(r => res.status(201).json({message: `element create`}))
            .catch(err => res.status(400).json({message: err.message}))
    } else {
        res.status(400).json({message: 'Missing Data'})
    };
};

const getMovieById = (req, res) => {
    const id = req.params.id
    moviesControllers.getMovieById(id)
        .then(r => res.status(200).json({
            Back_main: "http://127.0.0.1:9000/movies",
            id: id,
            respuesta: r
        }))
        .catch(err => res.status(404).json({message: err.message}))
};


//> Modificacion parcial
const patchMovie = (req, res) => {
    const id = String(req.params.id)
    const {name, genre, duration, releaseDate} = req.body

    moviesControllers.editMovie(id, {name, genre, duration, releaseDate})
    .then( r => {
        console.log(r)
        if (r) {
            res.status(200).json({message: `>> the id:${id} has >> modificated<<`})
        } else {
            res.status(404).json({message: `>> the id:${id} has >> Invalid <<`})
        } 
    })
    .catch( err => res.status(404).json({message: err.message}))
}

//>Delete Movie
const deleteMovie = (req, res) => {
    const id = String(req.params.id)
    const {name, genre, duration, releaseDate} = req.body

    moviesControllers.destroyMovie(id)
    .then( r => {
        console.log(r)
        if (r) {
            res.status(204).json({message: `>> the id:${id} has >> eliminated <<`})
        } else {
            res.status(400).json({message: `>> the id:${id} has >> No Found<<`})
        } 
    })
    .catch( err => res.status(400).json({message: err.message}))
}
module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    patchMovie,
    deleteMovie
}