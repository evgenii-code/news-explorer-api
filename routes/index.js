const router = require('express').Router();
const { celebrate } = require('celebrate');
const { loginSchema, createUserSchema } = require('../utils/validation-schemes');
const { login, createUser } = require('../controllers/users');
const checkPassword = require('../middlewares/check-password');
const auth = require('../middlewares/auth');
const users = require('./users.js');
const articles = require('./articles.js');
const NotFoundError = require('../errors/not-found-err');
const { errorMessages } = require('../utils/error-messages');

router.post('/signin', celebrate(loginSchema), checkPassword, login);
router.post('/signup', celebrate(createUserSchema), checkPassword, createUser);
router.use(auth);
router.use('/users', users);
router.use('/articles', articles);
router.use((req, res, next) => {
  next(new NotFoundError(errorMessages.notFound));
});

module.exports = router;
