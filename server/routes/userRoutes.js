const express = require("express");
const { registerUser, authUser, addBusiness } = require("../controllers/userControllers");

const router = express.Router(); 

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/business').get(addBusiness)

module.exports = router; 