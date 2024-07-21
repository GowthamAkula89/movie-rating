const express = require('express');
const movieController = require('../controllers/movie.controller');

const authenticate = require('../middleware/authentication');
const route = express.Router();

route.post("/", movieController.addMovie)
route.put("/:id",movieController.updateMovieById)
route.delete("/:id",movieController.deleteMovieById)
route.get("/:id", movieController.getMovieById)
route.get("/", movieController.getMovies);

module.exports = route;