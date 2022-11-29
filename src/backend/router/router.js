const express = require("express");
const router = express.Router();
const signupTemp = require("../model/signup");
var multer = require('multer')
var upload = multer()


router.post('/signup',upload.any(), (request, response) => {
   let files = {
      img1: '',
      img2: '',
      img3: ''
   }
   for ( let i of request.files){
      files[i.fieldname] = {
         data: i.buffer,
         contentType: i.mimetype
      }
   }
   
   const signedUpUser = new signupTemp({
       name: request.body.name,
       email: request.body.email,
       password: request.body.password,
       location: request.body.location,
       img1: files.img1,
       img2: files.img2,
       img3: files.img3,
       carBrand: request.body.carBrand,
       carModel: request.body.carModel,
       carType: request.body.carType,
       interests: request.body.interests
    })
    signedUpUser.save().then(data=>{
       response.json(data);
    })
    .catch(err =>{
       console.log(err)
       response.send("Error");
    })
 });

 router.post('/login', (request,response) => {
    signupTemp.findOne({   
       email: request.body.email,
       password: request.body.password
    }).then(data => {
      response.json(data);
    }).catch(err =>{
       response.send("Error");
       console.log(err);
    })
 
 });
module.exports = router;