const httpStatus = require("http-status");
const Movie = require('../models/movie.model');

const addReview = async(id, data) => {
    const movie =await Movie.findById(id);
    if(!movie){
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    movie.reviews.push(data);
    await movie.save();
    return movie;
}
const updateReview = async(movieId, reviewId, data) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    //Write the logic to update it in review list
    const reviewIdx = movie.reviews.findIndex(item => item._id === reviewId);
    if(reviewIdx ===-1){
        throw new ApiError(httpStatus.BAD_REQUEST,"ReviewId not in reviews")
    }
    movie.reviews[reviewIdx] = data;
}
const deleteReview = async(movieId, reviewId) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    //Write the logic to delete it in review list
}
const getReviews = async(movieId) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    return movie.reviews;
}
const getAverageRating = async(movieId) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    //Add the logic to calculate the average rating
}
module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviews,
    getAverageRating
}