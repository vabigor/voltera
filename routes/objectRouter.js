const Router = require('express')
const router = new Router()
const objectController = require('../controllers/objectController')

router.get('/', objectController.get)

module.exports = router
