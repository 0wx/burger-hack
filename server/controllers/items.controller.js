const { Item, Category, User, Ingredient, sequelize } = require('../models')
const { Op } = require('sequelize')
class ItemsController {
  static async list(req, res, next) {
    try {
      const options = {
        where: {},
        distinct: true,
        attributes: [
          'id',
          'name',
          'description',
          'price',
          'imgUrl',
          'authorId',
          'categoryId',
          'createdAt',
          'updatedAt',
        ],
        include: [
          {
            model: Category,
            as: 'category',
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          },
          {
            model: User,
            as: 'author',
            attributes: ['id', 'name', 'email'],
          },
          {
            model: Ingredient,
            as: 'ingredients',
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
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
          ...options.where,
          name: {
            [Op.iLike]: `%${req.query.search}%`,
          },
        }
      }

      if (req.query.sort) {
        const sort = req.query.sort.split(',')
        options.order = sort.map((s) => {
          const [field, order] = s.split(':')
          return [field, order]
        })
      }

      if (req.query.category) {
        options.where = {
          ...options.where,
          categoryId: req.query.category,
        }
      }

      const { rows: data, count: total } = await Item.findAndCountAll(options)
      const headers = {
        'X-Total-Count': total,
      }

      res.set(headers).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async get(req, res, next) {
    try {
      const options = {
        where: {
          id: req.params.id,
        },
        attributes: [
          'id',
          'name',
          'description',
          'price',
          'imgUrl',
          'authorId',
          'categoryId',
          'createdAt',
          'updatedAt',
        ],
        include: [
          { model: Category, as: 'category' },
          {
            model: User,
            as: 'author',
            attributes: ['id', 'name', 'email'],
          },
          { model: Ingredient, as: 'ingredients' },
        ],
      }

      const data = await Item.findOne(options)
      res.json(data)
    } catch (error) {
      next(error)
    }
  }

  static async create(req, res, next) {
    const t = await sequelize.transaction()
    try {
      const data = await Item.create(
        { ...req.body, authorId: req.user.id },
        { transaction: t }
      )

      const ingredients = req.body.ingredients.map((ingredient) => {
        return {
          name: ingredient,
          itemId: data.id,
        }
      })

      await Ingredient.bulkCreate(ingredients, { transaction: t })

      await t.commit()
      res.status(201).json(data)
    } catch (error) {
      next(error)
      await t.rollback()
    }
  }

  static async update(req, res, next) {
    const t = await sequelize.transaction()

    try {
      const options = {
        where: {
          id: req.params.id,
        },
      }

      const data = await Item.update(req.body, options)

      const ingredients = [...new Set(req.body.ingredients)].map(
        (ingredient) => {
          return {
            name: ingredient,
            itemId: req.params.id,
          }
        }
      )

      await Ingredient.destroy({
        where: {
          itemId: req.params.id,
        },
        transaction: t,
      })
      await Ingredient.bulkCreate(ingredients, {
        ignoreDuplicates: true,
        transaction: t,
      })

      await t.commit()
      res.json(data)
    } catch (error) {
      next(error)
      await t.rollback()
    }
  }

  static async delete(req, res, next) {
    try {
      const options = {
        where: {
          id: req.params.id,
        },
      }

      const data = await Item.destroy(options)
      res.json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ItemsController
