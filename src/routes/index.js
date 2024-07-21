const express = require('express');
const movieRoute = require('./movie.route');

const authRoute = require('./auth.route');
const router = express.Router();
router.use('/users', authRoute)
router.use('/movies', movieRoute);
console.log("Index Route")
module.exports = router;