const Router = require('express')
const router = new Router()
const individualController = require('../controllers/individualController')

router.get('/project', individualController.project)
router.get('/electrophysical-measurements', individualController.electrophysicalMeasurements)
router.get('/wiring', individualController.wiring)
router.get('/network-connection', individualController.networkConnection)

module.exports = router
