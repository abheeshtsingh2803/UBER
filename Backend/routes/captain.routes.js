const captainController = require('../controllers/captain.controller')
const express = require('express')
const router = express.Router();
const { body } = require('express-validator');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email Address'),
    body('fullname.firstname').isLength({ min : 3 }).withMessage('First Name must be atleast 3 characters'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be atleast 1 person'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto']).withMessage('Type must be in option')
], 
    captainController.registerCaptain
);




module.exports = router;