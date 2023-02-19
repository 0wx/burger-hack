const { Router } = require('express')
const router = Router()
const UsersController = require('../controllers/users.controller')
const {
  authentication,
  adminAuthorization,
} = require('../middlewares/auth.middlewares')

router.post('/login', UsersController.login)

router.use(authentication)
router.use(adminAuthorization)
router.post('/register', UsersController.register)
router.get('/admins', UsersController.fetchUsers)
router.put('/admins/:id', UsersController.editUser)
router.delete('/admins/:id', UsersController.deleteUser)

module.exports = router
