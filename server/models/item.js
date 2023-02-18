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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'category'
      })
      Item.hasMany(models.Ingredient, {
        foreignKey: 'itemId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'ingredients'
      })
      Item.belongsTo(models.User, {
        foreignKey: 'authorId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
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
