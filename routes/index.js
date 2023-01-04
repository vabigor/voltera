const Router = require('express')
const router = new Router()
const homeRouter = require('./homeRouter')
const commentRouter = require('./commentRouter')
const entityRouter = require('./entityRouter')
const individualRouter = require('./individualRouter')

router.use('/comment', commentRouter)
router.use('/', homeRouter)
router.use('/entity', entityRouter)
router.use('/individual', individualRouter)

module.exports = router
