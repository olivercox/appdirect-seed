var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api.js')

/* GET api status. */
router.get('/ping', function(req, res, next) {
  apiController.ping(function(result) {
      res.send(result)
  });
});

module.exports = router;
