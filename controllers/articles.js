const Article = require('../models/article');
const { defineError } = require('../utils/define-error');
const ForbiddenError = require('../errors/forbidden-err');

module.exports.getArticles = (req, res, next) => {
  const { _id } = req.user;

  Article.find({ owner: _id })
    // .orFail()
    .populate(['owner'])
    .then((article) => res.send({ data: article }))
    .catch((err) => defineError(err, next));
};

module.exports.createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const { _id: owner } = req.user;

  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.send({ data: article }))
    .catch((err) => defineError(err, next));
};

module.exports.deleteArticle = (req, res, next) => {
  const { articleId } = req.params;

  Article.findOne({
    _id: articleId,
  })
    .orFail()
    .populate(['owner'])
    .then((article) => {
      if (article.owner._id.toString() !== req.user._id) return next(new ForbiddenError('Недостаточно прав'));

      return article.deleteOne()
        .then((data) => {
          res.send({ data });
        })
        .catch((err) => defineError(err, next));
    })
    .catch((err) => defineError(err, next));
};
