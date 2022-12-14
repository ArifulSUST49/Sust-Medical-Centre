'use strict';
const Medicine = require('../models/medicine.model');
exports.findAll = function(req, res) {
Medicine.findAll(function(err, medicine) {
  console.log('medicine')
  if (err)
  res.send(err);
  console.log('res', medicine);
  res.send(medicine);
});
};

exports.create = function(req, res) {
    const new_medicine =new Medicine(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
    Medicine.create(new_medicine, function(err, medicine) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Medicine added successfully!",data:medicine});
    });
    }
    };
   