const httpStatus = require("http-status");
const reviewService = require('../services/review.service');

const addReview = async(req, res) => {
    const {id} = req.params;
    const review =await reviewService.addReview(id, req.body);
    res.status(httpStatus.CREATED).send(review);
}
const updateReview = async(req, res) => {
    const {id, reviewId} = req.params;
    const review = await reviewService.updateReview(id, reviewId, req.body);
    res.status(httpStatus.CREATED).send(review);
}
const deleteReview = async(req, res) => {
    const {id, reviewId} = req.params;
    const review = await reviewService.deleteReview(id, reviewId);
    res.status(httpStatus.CREATED).send(review);
}
const getReviews = async(req, res) => {
    const {id} = req.params;
    const review = await reviewService.getReviews(id);
    res.status(httpStatus.CREATED).send(review);
}
const getAverageRating = async(req, res) => {
    const {id} = req.params;
    const avgRating = await reviewService.getAverageRating(id)
    res.status(httpStatus.CREATED).send({avgRating: avgRating});
}
module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviews,
    getAverageRating
}