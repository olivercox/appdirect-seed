var express = require('express');
var router = express.Router();
var subscriptionController = require('../controllers/subscription.js')
var apiResponse = require('../api/api-response.js');
var apiHelpers = require('../api/api-helpers.js');

/*
 * Mock GET endpoints for the subscription API.
 * These are required for the ping tests in CF
 */

/* GET Ping Create subscription */
router.get('/*', function(req, res, next) {
  var result = '*** TEST *** ' + apiHelpers.getEventDescription(req.eventData)
  console.log(result);
  return res.sendApiSuccess(
    result, res)
});

/*
 * The real POST endpoints for subscription
 */
/* POST Create a subscription. */
router.post('/create', function(req, res, next) {
  subscriptionController.create(req.params.eventUrl, function(err, message) {
      if(err) return res.sendApiError(err.errorCode, err.message, res);
      return res.sendApiSuccess(message, res);
  });
});

/* GET home page. */
router.post('/change', function(req, res, next) {
  subscriptionController.change(req.params.eventUrl, function(err, message) {
      if(err) return res.sendApiError(err.errorCode, err.message, res);
      return res.sendApiSuccess(message, res);
  });
});

/* GET home page. */
router.post('/cancel', function(req, res, next) {
  subscriptionController.create(req.params.eventUrl, function(err, message) {
      if(err) return res.sendApiError(err.errorCode, err.message, res);
      return res.sendApiSuccess(message, res);
  });
});

/* GET home page. */
router.post('/status', function(req, res, next) {
  subscriptionController.status(req.params.eventUrl, function(err, message) {
      if(err) return res.sendApiError(err.errorCode, err.message, res);
      return res.sendApiSuccess(message, res);
  });
});

module.exports = router;
