const express = require('express');
const { getStats } = require('../controllers/statsControllers');
const authenticate = require('../middlewares/authenticate')
const router = express.Router(); 

router.route('/').get(authenticate,getStats)

module.exports = router