const httpStatus = require("http-status");
const Movie = require('../models/movie.model');

const addMovie = async(data) => {
    if(await Movie.isMovieNameTaken(data.title)){
        throw new Error(httpStatus.NOT_ACCEPTABLE, "Movie with given title already exist");
    }
    
    const movie = await Movie.create(data);
    return movie;
}

const updateMovieById = async(id, data) => {
    const movie = await Movie.findByIdAndUpdate(id, data, {new : true});
    if (!movie) {
        throw new Error(httpStatus.NOT_FOUND, "Movie not found");
    }
    return movie;

}

const deleteMovieById = async(id) => {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
        throw new Error(httpStatus.NOT_FOUND, "Movie not found");
    }
    return movie;
}

const getMovieById = async(id) => {
    const movie = await Movie.findById(id);
    if (!movie) {
        throw new Error(httpStatus.NOT_FOUND, "Movie not found");
    }
    return movie;
}

const getMovies = async() => {
    const movies = await Movie.find({});
    return movies;

}

module.exports = {
    addMovie,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getMovies
}