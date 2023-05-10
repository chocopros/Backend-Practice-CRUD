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
            .then(r => res.status(201).json())
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

module.exports = {
    getAllMovies,
    getMovieById,
    postMovie
}