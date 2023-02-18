const { Category, Item } = require('../models')
const { Op } = require('sequelize')

class CategoriesController {
  static async list(req, res, next) {
    try {
      const options = {
        order: [['name', 'ASC']],
        distinct: true,
        include: [
          {
            model: Item,
            as: 'items',
            attributes: ['id'],
          },
        ],
      }

      if (req.query.page) {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit) || 10
        const offset = (page - 1) * limit
        options.offset = offset
        options.limit = limit
      }

      if (req.query.search) {
        options.where = {
          name: {
            [Op.iLike]: `%${req.query.search}%`,
          },
        }
      }

      const { rows: data, count: total } = await Category.findAndCountAll(
        options
      )
      console.log(total, data.length, options)

      const headers = {
        'X-Total-Count': total,
      }
      res.set(headers).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async create(req, res, next) {
    try {
      const { name } = req.body
      const category = await Category.create({ name })
      res.status(201).json(category)
    } catch (error) {
      next(error)
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params
      const { name } = req.body
      const category = await Category.update({ name }, { where: { id } })
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params
      const category = await Category.destroy({ where: { id } })
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
  
}

module.exports = CategoriesController
