const express = require("express")
const router =express.Router()
const {employeePostReq, getAllEmployees, singleEmp,updateEmp,deleteEmp} = require("../controllers/employeeController")
/*employee registration*/
/*
name, occupation, image, callOffice, callMobile, email, sms
*/
router.post("/employee", employeePostReq)// POST REQ

router.get("/employees", getAllEmployees) //get all employee
router.get("/:id", singleEmp) /*getting one employee*/
router.put("/:id", updateEmp)/*update an employee info*/
router.delete("/:id", deleteEmp)/*delete an employee*/

module.exports= router // export router to server.js 
