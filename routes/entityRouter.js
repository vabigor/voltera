const Router = require('express')
const router = new Router()
const entityController = require('../controllers/entityController')

router.get('/project', entityController.project)
router.get('/certificates', entityController.certificates)

module.exports = router
