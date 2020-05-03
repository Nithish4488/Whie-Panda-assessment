const express= require('express');

const router = express.Router();
const mongoose = require('mongoose');

const Booking = require('../models/booking');

const Vehicle = require('../models/vehicle');

const BookingsController = require( '../controllers/bookings');


router.get('/',BookingsController.bookings_get_all);



router.post('/', BookingsController.bookings_create);

router.get('/:bookingId',BookingsController.bookings_byID);



router.patch('/:bookingId',BookingsController.bookings_update);



router.delete('/:bookingId',BookingsController.bookings_delete);

module.exports = router; 
