const express = require('express');
const RegisterRouter = express.Router();
const {UserModel} = require("../model/users.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


RegisterRouter.post("/",async (req,res)=> {
    console.log(req.body)
    try{
        const {
            profilePicture,
             username,
             bio,
             phone,
             email,
             password} = req.body;

             const data = await UserModel.find({email:email});
             if(data.length>0){
                res.send("user already register with this email address,use different email  or login");
             }else{
                bcrypt.hash(password, 2 ,async (error, hash_password) => {
                   if(error){
                    console.log(error)
                    res.send(error.message)
                   }else{
                    const newUser = new UserModel({
                        profilePicture,
                        username,
                        bio,
                        phone,
                        email,
                        password:hash_password
                    })
                    await newUser.save();

                    res.send("user successfully registered")
                   }
                });
             }
    }
    catch(error) {
        res.send(error.message)
    }
})


module.exports = {
    RegisterRouter
}


// profilePicture,
//  name,
//  bio,
//  phone,
//  email,
//  password