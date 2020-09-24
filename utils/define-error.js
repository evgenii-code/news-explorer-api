const NotFoundError = require('../errors/not-found-err');
const ValidationError = require('../errors/validation-err');
const ConflictError = require('../errors/conflict-err');
const { errorMessages } = require('./error-messages');

module.exports.defineError = (err, next) => {
  if (err.name === 'MongoError' && err.code === 11000) return next(new ConflictError(errorMessages.conflict));
  if (err.name === 'ValidationError') return next(new ValidationError(errorMessages.validation));
  if (err.name === 'CastError') return next(new ValidationError(errorMessages.wrongId));
  if (err.name === 'DocumentNotFoundError') return next(new NotFoundError(errorMessages.articleNotFound));

  return next(err);
};
