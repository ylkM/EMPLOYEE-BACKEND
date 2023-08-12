const router = require("express").Router()
const { query, json } = require("express")
const EmployeeModel =require("../models/employee")
/*employee registration*/
/*
name, occupation, image, callOffice, callMobile, email, sms
*/
router.post("/employee",async(req,res)=>{
const newEmployee = new EmployeeModel({
  name :req.body.name,
  occupation: req.body.occupation,
  callOffice : req.body.callOffice,
  CallMobile : req.body.CallMobile,
  email : req.body.email,
  sms: req.body.sms,
  //userImage : req.body.userImage,
  // saving the employee info in to mongodb database 
  })
  try{
    const savedEmployeeInfo =await newEmployee.save()
    res.status(200).json(savedEmployeeInfo)
  } catch(err){
    res.status(500).json(err)
  }
})
/*getting all employees*/
router.get("/employees", async(req,res)=>{
 try{
  const getAllEmployee =await EmployeeModel.find({})
  res.status(200).json(getAllEmployee)
 }catch(error){
  res.status(500).json(error)
 }
})

/*getting one employee*/
router.get("/:id", async(req,res)=>{
  try {
    const getSingleEmployee =await EmployeeModel.findById(req.params.id)
    res.status(200).json(getSingleEmployee)
  }catch(error){
    res.status(500).json(error)
  }

 
})
/*delete an employee*/

/*update an employee info*/
router.put("/:id", async(req,res)=>{
  try{
   const query ={_id:req.params.id}
   const updatedEmployee =await EmployeeModel.findByIdAndUpdate(query, 
    {$set:req.body},
    {new:true})
   res.status(200).json(updatedEmployee)
  }catch(error){
     res.status(500).error(json)
  }
})
module.exports= router // then import / required it inside server.js to display the out put 
