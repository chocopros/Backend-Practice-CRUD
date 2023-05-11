const router = require('express').Router()

const moviesServices = require('./movies.services')

//> >>GET<<
//! /movies
//! /movies/{id}

//> >>POST<<
//! /movies/{id}

//> >>PUT<<
//! /movies/{id}

//> >>PATCH<<
//! /movies/{id}

//> >>DELETE<<
//! /movies/{id}

router.get('/', moviesServices.getAllMovies)
router.post('/', moviesServices.postMovie)

router.get('/:id', moviesServices.getMovieById)
router.patch('/:id', moviesServices.patchMovie)
router.delete('/:id', moviesServices.deleteMovie)
//router.put('/movies/:id')


module.exports = router
