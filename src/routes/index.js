const express = require('express');
const movieRatingRoute = require('./movieRating.route');

const authRoute = require('./auth.route');
const router = express.Router();
router.use('/auth', authRoute)
router.use('/movieRating', movieRatingRoute);
console.log("Index Route")
module.exports = router;