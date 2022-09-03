const express = require("express");
const { registerUser, authUser, addBusiness, editBusiness } = require("../controllers/userControllers");
const authenticate = require("../middlewares/authenticate");
// const authenticate = require("../middlewares/authenticate");

const router = express.Router(); 

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/business').post(addBusiness)
router.route('/editbusiness').put(authenticate,editBusiness)
//stats route

module.exports = router; 