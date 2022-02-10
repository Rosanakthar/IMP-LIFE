const User = require('../model/userModule');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = (req,res,next) =>{
    const name = req.body.name;
    const number = parseInt(req.body.number.toString());
    const bloodGrp = req.body.bloodGrp;
    const country = req.body.country;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const password = req.body.password;
    // console.log(name,number,bloodGrp,country,city,pincode,password);
    User.find({number:number})
    .then(userFin =>{
        // console.log(userFin);
        if(userFin.length !=0){
            console.log("Phone num is already used");
            res.send({
                message:"Phone num is already used",
                path:'/signup'
            })
            // console.log(userFin);
            return;
        }
       return bcrypt.hash(password,12)
        .then(hashPassword => {
            const user = new User({
                name:name,
                number:number,
                bloodGrp:bloodGrp,
                country:country,
                city:city,
                pincode:pincode,
                password:hashPassword,
            })
            return user.save();
        })
        .then(result =>{
            res.status(200).send({
                message:"Created",
                post:result
            });
            // console.log("Created");
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
    
    
}

exports.Login = (req,res,next)=>{
    const number =parseInt( req.body.number);
    const password = req.body.password;
    // console.log(number,password);
    let loadUser;
    User.find({number:number})
    .then(user=>{
        
        // console.log(user)
        if(user.length===0){
            res.send({
                message:"Invalid Mobile Number"
            })
        }
        loadUser=user;
        // console.log(loadUser);
        return bcrypt.compare(password,user[0].password);
    }).then(isEqulal => {
        if(!isEqulal){
            res.send({
                message:"password Missmatch "
            })
        }
        const token = jwt.sign({
            number:loadUser[0].number,
            userId:loadUser[0]._id.toString(),
        },'Rosan',{expiresIn:"20h"});
        res.send({
            token:token,
            userId:loadUser[0]._id.toString(),
            userName:loadUser[0].name,
            message:"Login Successfull",
            path:'/'
        });
    }).catch(err=>console.log(err))
    
}

exports.findBlood = (req,res,next) => {
    User.find()
    .then(result=>{
        // console.log(result);
        res.json({
            post:result
        })
    })
}
exports.searchbld = (req,res,next) => {

    const bloodgrp = req.body.bloodGroup;
    const pincode = req.body.pincode;
    console.log("thisss",bloodgrp,pincode);
    User.find({bloodGrp:bloodgrp,pincode:pincode})
    .then(result=>{
        console.log(result);
        res.json({
            searched:result
        })
    }).catch(err=>console.log(err))
}