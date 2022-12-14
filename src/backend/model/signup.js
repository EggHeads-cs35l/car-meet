const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
   username:{
      type:String,
      required:true
   },

   name:{
      type:String,
      required:true
   },
   location:{
      type:String,
      required:true
   },
   img1:{
      data: Buffer,
      contentType: String,
      required: false
   },
   make:{
      type:String,
      required:true
   },
   model:{
      type:String,
      required:false
   },
   password:{
      type:String,
      required:true
   },
   mode:{
      type:String,
      required:false
   },

   year:{
      type:String,
      required:false
   },

   likes:{
      type:Array,
      required: false,
   },
   
   messages:{
      type:Array,
      required: false,
   }
});

module.exports = mongoose.model('Users', Profile);          