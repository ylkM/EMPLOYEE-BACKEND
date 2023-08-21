const express = require("express");
const router = express.Router();
const signupModel = require("../models/sign-up");
const CryptoJs = require("crypto-js");
// user registration  
router.post("/sign-up", async (req, res) => {
  const newUserSignedUp = new signupModel({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    passWord: CryptoJs.AES.encrypt(
      req.body.passWord,
      process.env.PASS_SECRET
    ).toString(),
    email: req.body.email,
  });
  try {
    const savedSignedData = await newUserSignedUp.save();
    res.status(200).json(savedSignedData);
  } catch (error) {
    res.status(500).json(error);
  }
});
// log inn endpoint
router.post("/login", async (req, res) => {
  try {
    const user = await signupModel.findOne({ email: req.body.email }); // find  all user information from data base and access email as req.body.email (which is the user currently inserting to the log in form )
    !user && res.status(401).json("wrong email"); // if the email that user inserted does not much we had in db
    const hashedPassword = CryptoJs.AES.decrypt(
      user.passWord,
      process.env.PASS_SECRET // decrypting the password
    );
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8); // using enc.utf8 standard to decoding and change the hashed password to the original form
    console.log("original password", originalPassword);
    if (originalPassword !== req.body.passWord) {
      res.status(401).json("wrong pass word"); // compar the original password(stored in db) with the password the user in inserting to log in form (if not much )
    } else {
      res.status(200).json("the user is Authenticated!!");
    }
  } catch (error) {
    res.status(500).json(error); // if there  is server issue
  }
});
module.exports = router; // Export the router to server.js
