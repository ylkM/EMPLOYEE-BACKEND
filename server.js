const express = require("express")
const mongoose =require("mongoose")
require("dotenv").config()
const app =express()
const PORT =process.env.PORT||7000
const employeeRouter =require("./routes/employee")
app.listen(PORT, (req,res)=>{
  console.log((`server is listening on:http://localhost:${PORT}`))
})

//mongoose.connect(process.env.MONGODB_URL)
mongoose
.connect("mongodb+srv://   ylkmngst7:mDBATBSMCTEC4As@cluster0.ocm5rli.mongodb.net/?retryWrites=true&w=majority")
.then (()=>{
  console.log("mongodb is connected successfully ")
  app.listen(PORT,(req,res)=>{
    console.log((`server is listening on :${PORT}`))
  }).catch((error)=>{
    console.log(error)
  })
})
 // middleware
 app.use(express.json())
 app.use("/api/employees", employeeRouter)
