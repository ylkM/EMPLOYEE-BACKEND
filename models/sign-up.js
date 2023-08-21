
const mongoose =require("mongoose")
 //collect name , userName, password ... to create signup form 
 const signupSchema =mongoose.Schema(
  {
   fullName:{
    type:String,
    require: true,
   },
    phoneNumber:{
     type:String,
     require
    },
   userName:{
    type: String,
    require
   },
   email:{
    type: String,
    require
   },
   passWord:{
    type:String,
    require
   }
 }, {
  Timestamp:{
    createdAT: "createdAt",
    updatedAt: "updatedAt"
  }
} 
 )
  module.exports =mongoose.model("signupModel", signupSchema)
