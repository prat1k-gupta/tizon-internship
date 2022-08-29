const express = require('express');
const { getStats, connectMe } = require('../controllers/statsControllers');
const authenticate = require('../middlewares/authenticate')
const router = express.Router(); 

router.route('/').get(authenticate,getStats)
router.route('/connect').post(connectMe)

module.exports = router