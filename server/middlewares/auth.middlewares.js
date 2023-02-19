const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.access_token
    const payload = verifyToken(token)
    const user = await User.findByPk(payload.id)
    if (!user) {
      throw { name: 'InvalidToken' }
    }
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

const adminAuthorization = (req, res, next) => {
  if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
    throw { name: 'Unauthorized' }
  }
  next()
}

const superadminAuthorization = (req, res, next) => {
  if (req.user.role !== 'superadmin') {
    throw { name: 'Unauthorized' }
  }
  next()
}


module.exports = {
  authentication,
  adminAuthorization,
  superadminAuthorization,
}
