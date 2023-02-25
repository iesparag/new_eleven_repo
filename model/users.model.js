const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
profilePicture : { type: String},
username : { type: String,require: true},
bio:{type:String},
phone:{type:Number,require:true},
email:{type:String,require:true,unique:true},
password:{type:String,require:true}
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};


//  profilePicture,
//  name,
//  bio,
//  phone,
//  email,
//  password