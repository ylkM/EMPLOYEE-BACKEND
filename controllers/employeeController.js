const EmployeeModel = require("../models/employee");
const asyncHandler = require("express-async-handler");

// employee post method

const employeePostReq = asyncHandler(async (req, res) => {
  const newEmployee = new EmployeeModel({
    name: req.body.name,
    occupation: req.body.occupation,
    cellOffice: req.body.cellOffice,
    cellMobile: req.body.cellMobile,
    email: req.body.email,
    sms: req.body.sms,
    imageURL: req.body.imageURL,
    // saving the employee info in to mongodb database
  });
  try {
    const savedEmployeeInfo = await newEmployee.save();
    res.status(200).json(savedEmployeeInfo);
  } catch (err) {
    res.status(500);
    console.log(err)
  }
});
/*getting all employees*/

const getAllEmployees = asyncHandler(async (req, res) => {
  try {
    const getAllEmployee = await EmployeeModel.find({});
    res.status(200).json(getAllEmployee);
  } catch (error) {
    res.status(500);
    throw new error(error.message);
  }
});
// get single employee
const singleEmp = asyncHandler(async (req, res) => {
  try {
    const getSingleEmployee = await EmployeeModel.findById(req.params.id);
    res.status(200).json(getSingleEmployee);
  } catch (error) {
    res.status(500);
    throw new error(error.message);
  }
});
// updating employee
const updateEmp = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.params.id;
    const query = _id;
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      query,
      { $set: req.body },
      { new: true }
    );
    if (!newEmployee) {
      res.status(400);
      throw new error(`cannot find any product with ID ${id}`);
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500);
    throw new error(error.message);
  }
});
//deleting employee
const deleteEmp = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params.id;
    await newEmployee.findByIDAndDelete(id);
    if (!newEmployee) {
      res.status(400);
      throw new error(`cannot find any product with ID ${id}`);
    }
    res.status(200).json("item is deleted successfully");
  } catch (error) {
    res.status(500);
    throw new error(error.message);
  }
});
// Exporting controllers to router.js file
module.exports = {
  employeePostReq,
  getAllEmployees,
  singleEmp,
  updateEmp,
  deleteEmp,
};
