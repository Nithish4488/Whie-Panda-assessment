const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     vehicle:{type: mongoose.Schema.Types.ObjectId ,ref:'Vehicle',required:true },
     vehicleId: {type: String},
     customername:{type :String},
     phno: {type: Number},
     issuedate: {type :String},
     returndate: {type :String}
}); 

module.exports =mongoose.model('Booking',bookingSchema); 