const ValidationError = require('../errors/validation-err');
const { errorMessages } = require('../utils/error-messages');

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || !password.trim()) {
    return next(new ValidationError(errorMessages.passwordNotPassed));
  }

  return next();
};

module.exports = checkPassword;
