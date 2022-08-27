const express = require("express");
const { registerUser, authUser, addBusiness } = require("../controllers/userControllers");
const authenticate = require("../middlewares/authenticate");
// const authenticate = require("../middlewares/authenticate");

const router = express.Router(); 

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/business').post(addBusiness)
//stats route

module.exports = router; 