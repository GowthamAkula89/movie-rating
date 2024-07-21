const express = require('express');
const userController = require('../controllers/auth.controller')

const route = express.Router();
route.post("/register", userController.register);
route.post("/login", userController.login);

module.exports = route;