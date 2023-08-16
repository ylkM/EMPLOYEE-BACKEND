require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const employeeRouter = require("./routes/employee");
const errorMiddleWare =require("./middleware/errorMiddleWare")

app.listen(  () => {
  console.log(`server is listening on:http://localhost:${PORT}`);
});

//const MONGODB_URI=(process.env.MONGODB_URI)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongodb is connected successfully ");
  })
  .catch((error) => {
    console.log(error);
  });

// middleware
app.use(express.json());
app.use("/api/employees", employeeRouter);
app.use(errorMiddleWare)

