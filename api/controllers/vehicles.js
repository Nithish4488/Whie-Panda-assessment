const Vehicle = require('../models/vehicle');


const mongoose = require('mongoose');


exports.vehicle_get_all = (req, res, next)=>{
    Vehicle.find()
    .exec()  
    .then(docs =>{
        console.log(docs);
        if(docs.length>0){
        res.status(200).json({docs});
        } else {
            res.status(404).json({
                message:"No Entries Found"
            });
        } 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
}






exports.vehicle_create = (req, res, next)=>{

    const vehicle = new Vehicle({
        _id: new mongoose.Types.ObjectId(),
        carno:req.body.carno,
        model: req.body.model,
        seatingcapacity: req.body.seatingcapacity,
        rentperday: req.body.rentperday
    });
    vehicle.save()
    .then(result =>{
        console.log(result);
        res.status(200).json({
            message:'handling post request to /vehicles',
            createdVehicle: result
        }); 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
   
}







exports.vehicle_byID = (req, res, next)=> {
    const id = req.params.vehicleId;
    Vehicle.findById(id)
    .exec()
    .then(doc =>{
        console.log("from the database",doc);
        if(doc) {
        res.status(200).json(doc);
        } else {
            res.status(404).json({message:"No valid entry found for provided ID "});
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
}









exports.vehicle_update = (req, res, next)=> {
    const id = req.params.vehicleId;
  
    Vehicle.update({_id : id}, { $set : { carno:req.body.carno, model :req.body.model ,seatingcapacity : req.body.seatingcapacity ,rentperday : req.body.rentperday}})
    .exec()  
    .then(result  =>{
        res.status(200).json({message:'Vehicle details updated'}); 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
}












exports.vehicle_delete = (req, res, next)=> {
    const id = req.params.vehicleId;
    
    Vehicle.remove({_id: id})
    .exec()  
    .then(result =>{
        res.status(200).json({message:'Vehicle details is deleted'}); 
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
}