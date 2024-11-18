const express = require('express');
const router = express.Router();  // Initialize the router
const { signUpController, loginController } = require('../controllers/authController.js');  // Import the controller

// Use the controller function for the POST route
router.post('/signup', signUpController);  // Use router.post instead of post
router.post('/login', loginController);
module.exports = router;  // Export the router
