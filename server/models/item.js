'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        as: 'category'
      })
      Item.hasMany(models.Ingredient, {
        foreignKey: 'itemId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        as: 'ingredients'
      })
      Item.belongsTo(models.User, {
        foreignKey: 'authorId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        as: 'author'
      })


    }
  }
  Item.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Item name is required',
          },
          notEmpty: {
            msg: 'Item name is required',
          },
        },
        description: {
          allowNull: false,
          type: DataTypes.STRING,
          validate: {
            notNull: {
              msg: 'Item description is required',
            },
            notEmpty: {
              msg: 'Item description is required',
            },
          },
        },
        price: {
          allowNull: false,
          type: DataTypes.INTEGER,
          validate: {
            notNull: {
              msg: 'Item price is required',
            },
            notEmpty: {
              msg: 'Item price is required',
            },
          },
        },
        imgUrl: {
          allowNull: false,
          type: DataTypes.STRING,
          validate: {
            notNull: {
              msg: 'Item image is required',
            },
            notEmpty: {
              msg: 'Item image is required',
            },
          },
        },
        authorId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
            onDelete: 'cascade',
            onUpdate: 'cascade',
          },
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
    },
    {
      sequelize,
      modelName: 'Item',
    }
  )
  return Item
}
