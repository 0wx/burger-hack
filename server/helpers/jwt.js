const { verify, sign } = require('jsonwebtoken')

const signToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET)
}

const verifyToken = (token) => {
  return verify(token, process.env.JWT_SECRET)
}

module.exports = { signToken, verifyToken }