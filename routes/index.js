const Router = require('express')
const router = new Router()
const homeRouter = require('./homeRouter')
// const commentRouter = require('./commentRouter')
// const entityRouter = require('./entityRouter')
// const individualRouter = require('./individualRouter')
// const objectRouter = require('./objectRouter')

// router.use('/comment', commentRouter)
router.use('/', homeRouter)
// router.use('/entity', entityRouter)
// router.use('/individual', individualRouter)
// router.use('/object', objectRouter)

module.exports = router
