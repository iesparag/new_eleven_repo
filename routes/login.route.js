const express = require('express');
const LoginRouter = express.Router();
const {UserModel} = require("../model/users.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


LoginRouter.post("/",async (req,res)=> {
    const {email,password} = req.body;
    try{
const user = await UserModel.find({email: email})
const hash_password = user[0].password;
if(user.length>0){
    bcrypt.compare(password, hash_password, (err, result) => {
        if(result){
            const token = jwt.sign({ userID: user[0]._id }, 'parag');
            res.send({"msg":"loginn successfill","token":token,"userID":user[0]._id})
        }else{
            res.send("invalid user")
        }
    });
}else{
    res.send("invalid")
}
    }
    catch(err){
        res.send(err.message)
    }
})






module.exports = {
    LoginRouter
}