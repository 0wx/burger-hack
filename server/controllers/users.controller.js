const { User, Item } = require('../models')
const { signToken } = require('../helpers/jwt')
const { compareSync } = require('bcryptjs')

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })

      if (!user) throw { name: 'InvalidEmailPassword' }

      const isValid = compareSync(password, user.password)

      if (!isValid) throw { name: 'InvalidEmailPassword' }

      const access_token = signToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })

      res.status(200).json({ access_token })
    } catch (error) {
      next(error)
    }
  }

  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body
      const user = await User.create({ name, email, password, role: 'admin' })
      const access_token = signToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })
      res.status(201).json({ access_token })
    } catch (error) {
      next(error)
    }
  }

  static async fetchUsers(req, res, next) {
    try {
      const users = await User.findAll({
        include: [{ model: Item, as: 'items' }],
        attributes: { exclude: ['password'] },
      })
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }

  static async editUser(req, res, next) {
    try {
      const { id } = req.params
      const { name, email } = req.body
      const user = await User.update(
        { name, email },
        { where: { id }, returning: true }
      )
      res.status(200).json(user[1][0])
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      const user = await User.destroy({ where: { id } })
      res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController
