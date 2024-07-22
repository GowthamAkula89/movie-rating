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
    const reviewIdx = movie.reviews.findIndex(item => item._id.equals(reviewId));
    if(reviewIdx === -1){
        throw new Error(httpStatus.BAD_REQUEST,"ReviewId not in reviews")
    }

    movie.reviews[reviewIdx] = {
        ...movie.reviews[reviewIdx].toObject(), // Retain existing review data
        ...data, // Merge new data
        _id: movie.reviews[reviewIdx]._id // Ensure ID is retained
    }; 
    await movie.save();
    return movie.reviews[reviewIdx];
}

const deleteReview = async(movieId, reviewId) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        throw new Error(httpStatus.BAD_REQUEST, "Invalid Id")
    }
    const reviewIdx = movie.reviews.findIndex(item => item._id.equals(reviewId));
    if(reviewIdx === -1){
        throw new Error(httpStatus.BAD_REQUEST,"ReviewId not in reviews")
    }
    movie.reviews.splice(reviewIdx, 1);
    await movie.save();
    return movie.reviews;
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
    if (!movie.reviews || movie.reviews.length === 0) {
        return 0; 
    }

    const totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / movie.reviews.length;

    
    return averageRating;
}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviews,
    getAverageRating
}