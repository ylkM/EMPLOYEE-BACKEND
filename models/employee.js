
const mongoose =require("mongoose")
// create schema
const EmployeeSchema = new mongoose.Schema({
  Image_URL:{
    type:String,
    required: false,
  },
  name:{
    type:String,
    required: [true, "PLEASE ENTER YOUR NAME"]
  },
  Occupation:{
    type:String,
    required: true,
  },
  CellMobile:{
    type:String,
    required: true,
  },
  CellOffice:{
    type:String,
    required: true,
  },
  CellSms:{
    type:String,
    required: true,
  },
   Email:{
    type:String,
    required: true,
  },
  
  
}, {
  Timestamp:{
    createdAT :"created at",
    updatedAt :"updated at"
  }
})
 // creating model (EmployeeModel)and exporting it 
 const EmployeeModel =mongoose.model("EmployeeModel", EmployeeSchema)
 module.exports = EmployeeModel

