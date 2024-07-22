const httpStatus = require("http-status");
const reviewService = require('../services/review.service');

const addReview = (req, res) => {
    const {id} = req.params;
    const review = reviewService.addReview(id, req.body);
    res.status(httpStatus.CREATED).send(review);
}
const updateReview = async(req, res) => {
    const {id, reviewId} = req.params;
    const review = reviewService.updateReview(id, reviewId, req.body);
    res.status(httpStatus.CREATED).send(review);
}
const deleteReview = async(req, res) => {
    const {id, reviewId} = req.params;
    const review = reviewService.deleteReview(id, reviewId);
    res.status(httpStatus.CREATED).send(review);
}
const getReviews = async(req, res) => {
    const {id} = req.params;
    const review = reviewService.getReviews(id);
    res.status(httpStatus.CREATED).send(review);
}
const getAverageRating = async(req, res) => {
    const {id} = req.params;
    const review = reviewService.getAverageRating(id)
    res.status(httpStatus.CREATED).send(review);
}
module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviews,
    getAverageRating
}