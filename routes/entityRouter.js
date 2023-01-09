const Router = require('express')
const router = new Router()
const entityController = require('../controllers/entityController')

router.get('/project', entityController.project)
router.get('/budgeting', entityController.budgeting)
router.get('/electric-installation-work', entityController.electricInstallationWork)
router.get('/electrophysical-measurements', entityController.electrophysicalMeasurements)
router.get('/operative-maintenance', entityController.operativeMaintenance)
router.get('/post-warranty-service', entityController.postWarrantyService)
router.get('/certificates', entityController.certificates)

module.exports = router
