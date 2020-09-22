const router = require('express').Router();
const { celebrate } = require('celebrate');
const { loginSchema, createUserSchema, authSchema } = require('../utils/validation-schemes');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const users = require('./users.js');
const articles = require('./articles.js');
const NotFoundError = require('../errors/not-found-err');
const { errorMessages } = require('../utils/error-messages');

router.post('/signin', celebrate(loginSchema), login);
router.post('/signup', celebrate(createUserSchema), createUser);
router.use(celebrate(authSchema), auth);
router.use('/users', users);
router.use('/articles', articles);
router.use((req, res, next) => {
  next(new NotFoundError(errorMessages.notFound));
});

module.exports = router;
