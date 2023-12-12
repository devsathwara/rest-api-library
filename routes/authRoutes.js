// userRoutes.js
const express = require('express');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();



router.post('/login',userController.login);
router.post('/register', userController.register);

module.exports = router;
