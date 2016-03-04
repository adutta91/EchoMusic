// error util
//    purpose: action requestts regarding errors

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var SessionActions = require('../actions/sessionActions');
var ErrorActions = require('../actions/errorActions');

var ErrorUtil = {
  clearErrors: function() {
    ErrorActions.clearErrors();
  }
};

module.exports = ErrorUtil;
