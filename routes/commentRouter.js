const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/', commentController.getAll)
router.post('/', commentController.create)

module.exports = router
