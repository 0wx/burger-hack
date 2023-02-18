const { User } = require('../models')
const { signToken, verifyToken } = require('../helpers/jwt')
const { compareSync } = require('bcryptjs')

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })

      if (!user) throw { name: 'InvalidEmailPassword' }

      const isValid = compareSync(password, user.password)

      if (!isValid) throw { name: 'InvalidEmailPassword' }

      const access_token = signToken({ id: user.id, email: user.email })

      res.status(200).json({ access_token })
    } catch (error) {
      next(error)
    }
  }

  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body
      const user = await User.create({ name, email, password, role: 'admin' })
      const access_token = signToken({ id: user.id, email: user.email })
      res.status(201).json({ access_token })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController
