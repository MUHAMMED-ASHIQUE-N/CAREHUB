const express = require('express');
const {userRegister, userSignin} = require("../controllers/userControllers");


const router = express.Router();


//Register
router.post('/Register',userRegister);
router.post('/login',userSignin);


module.exports = { userRouter: router };