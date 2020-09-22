const NotFoundError = require('../errors/not-found-err');
const ValidationError = require('../errors/validation-err');
const ConflictError = require('../errors/conflict-err');

module.exports.defineError = (err, next) => {
  if (err.name === 'MongoError' && err.code === 11000) next(new ConflictError('Пользователь с таким email уже существует'));
  if (err.name === 'ValidationError') return next(new ValidationError('Ошибка валидации'));
  if (err.name === 'CastError') return next(new ValidationError('Передан неверный id'));
  if (err.name === 'DocumentNotFoundError') return next(new NotFoundError('Запрашиваемый ресурс не найден'));

  return next(err);
};
