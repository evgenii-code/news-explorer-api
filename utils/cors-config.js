const ForbiddenError = require('../errors/forbidden-err');
const { errorMessages } = require('./error-messages');
require('dotenv').config();

const { CORS_WHITELIST = 'http://localhost:8080' } = process.env;

module.exports.corsOptions = {
  origin(origin, callback) {
    if (CORS_WHITELIST.split(' ').indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new ForbiddenError(errorMessages.notAllowedByCORS));
    }
  },
};
