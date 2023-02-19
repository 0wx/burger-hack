const { Router } = require('express')
const router = Router()
const auth = require('./auth.routes')
const items = require('./items.routes')
const categories = require('./categories.routes')
const error = require('../middlewares/error.middlewares')

router.use('/auth', auth)
router.use('/items', items)
router.use('/categories', categories)

router.use(error)

module.exports = router
