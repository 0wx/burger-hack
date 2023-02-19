module.exports = (err, req, res, next) => {
  let status = 500
  let message = 'Internal Server Error'
  console.log(err)

  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    status = 400
    message = err.errors.map((error) => error.message)[0]
  }

  if (
    err.name === 'JsonWebTokenError' ||
    err.name === 'TokenExpiredError' ||
    err.name === 'InvalidToken'
  ) {
    status = 401
    message = 'Invalid Token'
  }

  if (err.name === 'InvalidEmailPassword') {
    status = 400
    message = 'Invalid Email/Password'
  }

  if (err.name === 'NotFound') {
    status = 404
    message = err.message || 'Data not found'
  }

  if (err.name === 'Unauthorized') {
    status = 403
    message = 'Unauthorized'
  }

  res.status(status).json({ message })
}
