const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth-err');
const { errorMessages } = require('../utils/error-messages');

require('dotenv').config();

const { NODE_ENV = 'development', JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError(errorMessages.authNeeded));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthError(errorMessages.authNeeded));
  }

  req.user = payload;

  return next();
};
