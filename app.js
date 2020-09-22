const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { celebrate } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const users = require('./routes/users.js');
const articles = require('./routes/articles.js');
const {
  login,
  createUser,
} = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');
const errorHandler = require('./middlewares/error');
const { loginSchema, createUserSchema, authSchema } = require('./utils/validation-schemes');

require('dotenv').config();

const app = express();
const {
  PORT = 3000,
  DB_DOMAIN = 'mongodb://localhost:27017/news-explorer-db',
} = process.env;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect(DB_DOMAIN, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(limiter);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);

app.post('/signin', celebrate(loginSchema), login);
app.post('/signup', celebrate(createUserSchema), createUser);
app.use(celebrate(authSchema), auth);
app.use('/users', users);
app.use('/articles', articles);

app.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
