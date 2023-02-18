'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingedients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingedients.belongsTo(models.Item, {
        foreignKey: 'itemId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Ingedients.init(
    {
      itemId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Ingredient name is required',
          },
          notEmpty: {
            msg: 'Ingredient name is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Ingredient',
    }
  )
  return Ingedients
}
