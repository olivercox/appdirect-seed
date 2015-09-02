var express = require('express');
var router = express.Router();
var addonsController = require('../controllers/addons.js')
var apiResponse = require('../api/api-response.js');
var apiHelpers = require('../api/api-helpers.js');

/*
 * Mock GET endpoints for the subscription API.
 * These are required for the ping tests in CF
 */

/* GET Ping Create subscription */
router.get('/*', function(req, res, next) {
  var result = '*** TEST *** ' + apiHelpers.getAddOnEventDescription(req.eventData)
  console.log(result);
  return res.sendApiSuccess(
    result, res)
});

/*
 * The real POST endpoints for subscription
 */
/* POST Create a subscription. */
router.post('/', function(req, res, next) {
  addonsController.create(req.params.eventUrl, function(err, message) {
      if(err) return res.sendApiError(err.errorCode, err.message, res);
      return res.sendApiSuccess(message, res);
  });
});

module.exports = router;
