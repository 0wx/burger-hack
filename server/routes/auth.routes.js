const { Router } = require('express')
const router = Router()
const UsersController = require('../controllers/users.controller')
const {
  authentication,
  adminAuthorization,
} = require('../middlewares/auth.middlewares')

router.post(
  '/register',
  authentication,
  adminAuthorization,
  UsersController.register
)
router.post('/login', UsersController.login)

module.exports = router
