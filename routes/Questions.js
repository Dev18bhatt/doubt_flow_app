const express = require('express');
const router = express.Router();
const { askQuestion, getAllQuestion, deleteQuestion } = require('../controllers/questionController.js');
const middlewareChecks = require('../middlewares/auth.middleware.js');

router.post('/postQuestion', middlewareChecks, askQuestion);
router.get('/getAllQuestion', middlewareChecks, getAllQuestion);
router.delete("/deleteQuestion/:id", middlewareChecks, deleteQuestion);

module.exports = router;