const express= require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Vehicle = require('../models/vehicle');

const VehicleController = require('../controllers/vehicles');

router.get('/',VehicleController.vehicle_get_all);


router.post('/',VehicleController.vehicle_create);

router.get('/:vehicleId',VehicleController.vehicle_byID);



router.patch('/:vehicleId',VehicleController.vehicle_update);



router.delete('/:vehicleId',VehicleController.vehicle_delete);

module.exports = router; 
