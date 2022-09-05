const express = require('express');
const { getStats, connectMe, deleteStats } = require('../controllers/statsControllers');
const authenticate = require('../middlewares/authenticate')
const router = express.Router(); 

router.route('/').get(authenticate,getStats)
router.route('/connect').post(connectMe)
router.route('/delete/:id').delete(deleteStats)
module.exports = router