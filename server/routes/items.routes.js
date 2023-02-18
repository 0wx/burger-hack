const { Router } = require('express')
const ItemsController = require('../controllers/items.controller')
const {
  authentication,
  adminAuthorization,
} = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/', ItemsController.list)
router.get('/:id', ItemsController.get)

router.use(authentication)
router.use(adminAuthorization)

router.post('/', ItemsController.create)
router.put('/:id', ItemsController.update)
router.delete('/:id', ItemsController.delete)

module.exports = router