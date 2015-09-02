var express = require('express');
var path = require('path');
var logger = require('morgan');
var qs = require('querystring');
var apiResponse = require('./api/api-response')
var apiHelpers = require('./api/api-helpers.js');
var apiAuth = require('./api/api-auth.js');

var routes = require('./routes/index');
var users = require('./routes/user');
var api = require('./routes/api');
var subscription = require('./routes/subscription');
var addons = require('./routes/addons');

var app = express();

app.use(logger('dev'));

/**
 * Route middleware for response helpers
 */
app.use('/', apiResponse);

/**
 * Route for api. Added before auth and event data as it is only for status
 */
 app.use('/api', api);

/**
 * Route middleware to validate oauth signature
 */
app.use('/', apiAuth.requireAuth);

/**
 * Route middleware to validate that event url is present
 */
app.use('/', apiHelpers.checkForEventUrl)

/**
 * Route middleware to get event data from the request
 */
app.use('/', apiHelpers.getEventData)

/**
 * Routes for user management
 */
app.use('/user', users);

/**
 * Routes for subscription management
 */
app.use('/subscription', subscription);

/**
 * Routes for addon management
 */
app.use('/addons', addons);

/**
 * Catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * API Error handler. Ensures required response format is returned
 */
app.use(function apiErrorHandler(err, req, res, next) {
  console.log(err);
  console.log(err.stack)
  return res.sendApiError('UNKNOWN_ERROR', err.message);
});

module.exports = app;
