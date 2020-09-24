const { Joi } = require('celebrate');
const { urlValidation } = require('./url-validation');
const { validationMessages } = require('./validation-messages');

module.exports.loginSchema = {
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .messages({
        'any.required': validationMessages['any.required'],
        'string.email': validationMessages['string.email'],
      }),
    password: Joi.string().required().min(8)
      .messages({
        'string.min': validationMessages['string.min'],
        'any.required': validationMessages['any.required'],
      }),
  }),
};

module.exports.createUserSchema = {
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .messages({
        'any.required': validationMessages['any.required'],
        'string.email': validationMessages['string.email'],
      }),
    password: Joi.string().required().min(8)
      .messages({
        'string.min': validationMessages['string.min'],
        'any.required': validationMessages['any.required'],
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': validationMessages['string.min'],
        'string.max': validationMessages['string.max'],
        'any.required': validationMessages['any.required'],
      }),
  }),
};

module.exports.createArticleScheme = {
  body: Joi.object().keys({
    keyword: Joi.string().required()
      .messages({
        'any.required': validationMessages['any.required'],
      }),
    title: Joi.string().required()
      .messages({
        'any.required': validationMessages['any.required'],
      }),
    text: Joi.string().required()
      .messages({
        'any.required': validationMessages['any.required'],
      }),
    date: Joi.string().required()
      .messages({
        'any.required': validationMessages['any.required'],
      }),
    source: Joi.string().required()
      .messages({
        'any.required': validationMessages['any.required'],
      }),
    link: Joi.string().required().custom(urlValidation, 'custom url validation')
      .messages({
        'any.required': validationMessages['any.required'],
        'any.custom': validationMessages['any.custom'],
      }),
    image: Joi.string().required().custom(urlValidation, 'custom url validation')
      .messages({
        'any.required': validationMessages['any.required'],
        'any.custom': validationMessages['any.custom'],
      }),
  }),
};

module.exports.articleIdScheme = {
  params: Joi.object().keys({
    articleId: Joi.string().hex().length(24)
      .messages({
        'string.hex': validationMessages['string.hex'],
        'string.length': validationMessages['string.length'],
      }),
  }),
};
