const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { defineError } = require('../utils/define-error');
const ValidationError = require('../errors/validation-err');
const { errorMessages } = require('../utils/error-messages');

require('dotenv').config();

const { NODE_ENV = 'development', JWT_SECRET } = process.env;

module.exports.createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;

  if (!password) return next(new ValidationError(errorMessages.passwordNotPassed));

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => defineError(err, next));
};

module.exports.getUsersMe = (req, res, next) => {
  const { _id } = req.user;

  User.findOne({ _id })
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => defineError(err, next));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );

      res.status(200).send({ token });
    })
    .catch((err) => defineError(err, next));
};
