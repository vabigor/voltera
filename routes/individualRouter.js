const Router = require('express')
const router = new Router()
const individualController = require('../controllers/individualController')

router.get('/project', individualController.project)

module.exports = router
