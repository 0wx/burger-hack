const { Router } = require('express')
const router = Router()
const {
  authentication,
  adminAuthorization,
} = require('../middlewares/auth.middlewares')

const CategoriesController = require('../controllers/categories.controller')

router.get('/', CategoriesController.list)

router.use(authentication)
router.use(adminAuthorization)

router.post('/', CategoriesController.create)
router.put('/:id', CategoriesController.update)
router.delete('/:id', CategoriesController.delete)

module.exports = router
