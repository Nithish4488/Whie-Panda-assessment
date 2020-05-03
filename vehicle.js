const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     carno: String,
     model: String,
     seatingcapacity:Number,
     rentperday:Number
});

module.exports =mongoose.model('Vehicle',vehicleSchema); 