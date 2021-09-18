var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = (Article) => {
  /* GET home page. */
  router.get('/', async function(req, res, next) {
      const articles = await Article.findAll({
        attributes: ['title', "content", 'id', 'pictureUrl', 'createdAt']
      });
      res.render('index', {articles : articles, title: 'Liste des articles'});
  });

  return router;

}
