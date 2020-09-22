const { Joi } = require('celebrate');
const { urlValidation } = require('./url-validation');

module.exports.loginSchema = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

module.exports.createUserSchema = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
};

module.exports.authSchema = {
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
};

module.exports.createArticleScheme = {
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().custom(urlValidation, 'custom url validation'),
    image: Joi.string().required().custom(urlValidation, 'custom url validation'),
  }),
};

module.exports.articleIdScheme = {
  params: Joi.object().keys({
    articleId: Joi.string().hex().length(24),
  }),
};
