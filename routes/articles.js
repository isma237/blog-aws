var express = require('express');
var router = express.Router();
var S3 = require('aws-sdk/clients/s3');
const { uploadFile } = require('../storageS3');

const multer  = require('multer');
const { render } = require('ejs');
const upload = multer({ dest: 'uploads/' })

module.exports = (Article) => {

  router.get('/', async function(req, res, next) {
    const articles = await Article.findAll();
    console.log(articles);
    return render('index', {articles : articles, title: 'Liste des articles'});
  });
  
  router.post('/', upload.single('file'), async(req, res) => {
    
    try {
      const file = req.file;
      const docUrl = await uploadFile(file);
      
      const article = await Article.create({
        title: req.body.title,
        content: req.body.content,
        pictureUrl: docUrl
      })

      res.send(article);

    } catch (error) {
      console.log(error);
      res.send(error)
    }
  })
  return router;
}
