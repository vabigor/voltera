const Router = require('express')
const router = new Router()
const entityController = require('../controllers/entityController')

router.get('/project', entityController.project)

module.exports = router
