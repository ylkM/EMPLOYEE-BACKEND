require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT =  3000;
const employeeRouter = require("./routes/employee");
const signupRouter =require("./routes/sign-up")
const cors =require("cors")
// const errorMiddleWare =require("./middleware/errorMiddleWare")

app.listen( PORT, () => {
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
app.use(cors());
app.use("/api/employees", employeeRouter);
app.use("/api/users",signupRouter)
// app.use(errorMiddleWare)

