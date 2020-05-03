const Booking = require('../models/booking');
const Vehicle = require('../models/vehicle');
const mongoose = require('mongoose');
exports.bookings_get_all = (req, res, next)=>{
    Booking.find()
    .select('vehicle customername phno issuedate returndate _id' ) 
    .populate('vehicle') 
    .exec()  
    .then(docs  =>{
        res.status(200).json({docs}); 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
}


exports.bookings_create = (req, res, next)=>{
    Vehicle.findById(req.body.vehicleId)
    .then(vehicle=>{
  if(!vehicle){
            return res.status(404).json({
                message:"Vehicle not found"
            });
         }
        const booking = new Booking({
            _id: mongoose.Types.ObjectId(),
            customername:req.body.customername,
            phno:req.body.phno,
            issuedate:req.body.issuedate,
            returndate:req.body.returndate,
            vehicle:req.body.vehicleId
        });
        return booking
        .save();  
    })
    .then(result=>{
        console.log(result);
            res.status(201).json({
                message:"Booking is resevered",result
            });
    })
    .catch(err=>{
        res.status(404).json({
            error:err
        });
    });
    
}



exports.bookings_byID = (req, res, next)=> {
    Booking.findById(req.params.bookingId)
    .populate('vehicle')
    .exec()
    .then(booking=>{
        if(!booking){
            return req.status(404).json({messsge:"Booking not found"});
        }
    res.status(200).json({
            message:'booking details',
            booking: booking,
            
         });
        })
        .catch(err=>{
            res.status(500).json({messsge:"Booking not found",
                
            });
        });
}







exports.bookings_update = (req, res, next)=> {
    const id = req.params.bookingId;
    Booking.update({_id : id}, { $set : { customername :req.body.customername ,phno : req.body.phno ,issuedate : req.body.issuedate , returndate:req.body.returndate}})

    .exec()
    .then(booking=>{
    res.status(200).json({
            message:'booking updated',
            booking: booking,
            
         });
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            });
        });
}











exports.bookings_delete = (req, res, next)=> {
    Booking.remove({ _id:req .params.bookingId}) 
    .exec()
    .then(result=>{
        res.status(201).json({
            message :"Your Booking is deleted ",
            
        });
    })
    .catch(err=>{
        res.status(404).json({
            message:'Booking does not exist'
        });
    });
}