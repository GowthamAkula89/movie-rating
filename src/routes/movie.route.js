const express = require('express');
const movieController = require('../controllers/movie.controller');
const reviewController = require('../controllers/review.controller');
const authenticate = require('../middleware/authentication');
const route = express.Router();

route.post("/", movieController.addMovie)
route.put("/:id",movieController.updateMovieById)
route.delete("/:id",movieController.deleteMovieById)
route.get("/:id", movieController.getMovieById)
route.get("/", movieController.getMovies);

route.post('/:id/reviews', authenticate, reviewController.addReview);
route.put('/:id/reviews/:reviewId', authenticate, reviewController.updateReview);
route.delete('/:id/reviews/:reviewId', authenticate, reviewController.deleteReview);
route.get('/:id/reviews', authenticate, reviewController.getReviews)
route.get('/:id/averageRating', authenticate, reviewController.getAverageRating)
module.exports = route;