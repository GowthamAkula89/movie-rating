const httpStatus = require("http-status");
const movieService = require("../services/movie.service");

const addMovie = async(req, res) => {
    const movie = await movieService.addMovie(req.body);
    res.status(httpStatus.CREATED).send(movie);

}

const updateMovieById = async(req, res) => {
    const {id} = req.params;
    const movie = await movieService.updateMovieById(id, req.body);
    res.status(httpStatus.OK).send(movie);
}

const deleteMovieById = async(req, res) => {
    const {id} = req.params;
    const movie = await movieService.deleteMovieById(id);
    res.status(httpStatus.OK).send(movie);
}

const getMovieById = async(req, res) => {
    const {id} = req.params;
    const movie = await movieService.getMovieById(id);
    res.status(httpStatus.OK).send(movie);
}

const getMovies = async(req, res) => {
    const movie = await movieService.getMovies();
    res.status(httpStatus.OK).send(movie);
}

module.exports = {
    addMovie,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getMovies
}