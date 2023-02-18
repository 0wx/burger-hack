'use strict';
const { hashSync } = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, {
        foreignKey: 'authorId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required',
        },
        notEmpty: {
          msg: 'Name is required',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists',
      },
      validate: {
        notNull: {
          msg: 'Email is required',
        },
        notEmpty: {
          msg: 'Email is required',
        },
        isEmail: {
          msg: 'Email is invalid',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required',
        },
        notEmpty: {
          msg: 'Password is required',
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Role is required',
        },
        notEmpty: {
          msg: 'Role is required',
        },
        isIn: {
          args: [['admin', 'customer', 'superadmin']],
          msg: 'Role must be either admin or customer or superadmin',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashSync(user.password, 10)
      }
    }
  });
  return User;
};