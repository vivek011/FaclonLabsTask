
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var HttpStatus = require('http-status-codes');
var Contact=require('../models/contacts.js')
var User=require('../models/user.js')


var creteContactsProfile=function(req,res){
  if( req.body.firstName=="" || req.body.lastName=="" || req.body.age=="" || req.body.email=="" ||req.body.mobile==""||req.body.dob==""||req.body.UserId=="") {
      return res.send({message:"Please provide all the details",status:400})
  }
  else {
    Contact.create(req.body,function(err, data){
        if(err) return res.send({status : 400, message : "Either email or mobile already exist in db"});
        return res.send({status : 200, message : "User record has been saved!", data : data});
      });
    }
}
exports.creteContactsProfile=creteContactsProfile;
