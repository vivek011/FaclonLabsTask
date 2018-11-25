
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var HttpStatus = require('http-status-codes');
var User=require('../models/user.js')
var url = require('url');
var creteUserProfile=function(req,res){
   // var q = url.parse(req.url, true);
   // console.log(q.host);
   // console.log(q.pathname);
  if( req.body.firstName=="" || req.body.lastName=="" || req.body.age=="" || req.body.email=="" ||req.body.mobile==""||req.body.dob=="") {
      return res.send({message:"Please provide all the details",status:400})
  }
  else {
    User.create(req.body,function(err, data){
        if(err) return res.send({status : 400, message : "Either email or mobile already exist in db"});
        return res.send({status : 200, message : "User record has been saved!", data : data});
      });
    }
}
var deleteUserProfile=function(req,res){

    User.remove(req.body,function(err, data){
        if(err) return res.send({status : 400, message : "Either email or mobile already exist in db"});

        return res.send({status : 200, message : "User record has been saved!", data : data});
      });
    //code 2........................................
    // User.pre('remove', function(next) {
    //   // Remove all the assignment docs that reference the removed person.
    //   this.model('Contact').remove({ UserId: this._id }, next);
    // })

    /////code 3...............................................
//     DeparmentSchema.pre('remove', function (next) {
//     console.log('deleting department', this);
//     User.remove({
//         UserId: { $in: this._id } // this.employees must be an array of ObjectIds
//     }, function (err) {
//         console.log(err);
//         if (err) return next(err);
//         next();
//     });
// });


}
exports.creteUserProfile=creteUserProfile;
exports.deleteUserProfile=deleteUserProfile;
