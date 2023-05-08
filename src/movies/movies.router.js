const router = require('express').Router()

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

//?PREFIJO


router.get('/movies')
router.post('/movies')

router.get('/movies/:id')
router.put('/movies/:id')
router.patch('/movies/:id')
router.delete('/movies/:id')


