const router = require('express').Router();
const { celebrate } = require('celebrate');
const { createArticleScheme, articleIdScheme } = require('../utils/validation-schemes');
const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

router.get('/', getArticles);
router.post('/', celebrate(createArticleScheme), createArticle);
router.delete('/:articleId', celebrate(articleIdScheme), deleteArticle);

module.exports = router;
