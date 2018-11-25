
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var contactSchema=new Schema({
  firstName : {type:String},

  lastName : {type:String},

  age : {type:String},

  email : {type:String,
          unique: true,},

  mobile :{type:String,
          unique: true,},

  dob :{type:String},

  UserId:{ type:mongoose.Schema.Types.ObjectId,ref:'User'},


})
module.exports= mongoose.model('Contact', contactSchema);
