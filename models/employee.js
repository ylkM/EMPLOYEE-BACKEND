
const mongoose =require("mongoose")
// create schema
const EmployeeSchema = new mongoose.Schema(
  {
  imageURL:{
    type:String,
    required: false,
  },
  name:{
    type:String,
    required: [true, "PLEASE ENTER YOUR NAME"]
  },
  occupation:{
    type:String,
    required: true,
  },
  cellMobile:{
    type:String,
    required: true,
  },
  cellOffice:{
    type:String,
    required: true,
  },
  sms:{
    type:String,
    required: false,
  },
   email:{
    type:String,
    required: true,
  },
  
  
}, {
  Timestamp:{
    createdAT :"created at",
    updatedAt :"updated at"
  }
}
)
 // creating model (EmployeeModel)and exporting it 
 module.exports =mongoose.model("EmployeeModel", EmployeeSchema)
 //EmployeeModel = the name of model 

