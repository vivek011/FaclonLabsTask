
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Contact=require('../models/contacts.js')

var userSchema=new Schema({
  firstName : {type:String},

  lastName : {type:String},

  age : {type:String},

  email : {type:String,
          unique: true,},

  mobile :{type:String,
          unique: true,},

  dob :{type:String}


})
// userSchema.pre('remove', function(next) {
//   // Remove all the assignment docs that reference the removed person.
//   this.model('Contact').remove({ UserId: this._id }, next);
// })

module.exports= mongoose.model('User', userSchema);

userSchema.pre('remove', function (next) {
console.log('deleting department', this);
Contact.remove({
    UserId: { $in: this._id } // this.employees must be an array of ObjectIds
}, function (err) {
    console.log(err);
    if (err) return next(err);
    next();
});
});
userSchema.post('remove', function (next) {
console.log('deleting department', this);
Contact.remove({
    UserId: { $in: this._id } // this.employees must be an array of ObjectIds
}, function (err) {
    console.log(err);
    if (err) return next(err);
    next();
});
});
