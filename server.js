const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const employeeRouter = require("./routes/employee");

app.listen(  () => {
  console.log(`server is listening on:http://localhost:${PORT}`);
});
// testing prettier
//mongoose.connect(process.env.MONGODB_URL)

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
