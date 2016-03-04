// functions for all error actions
//    purpose: dispatch error to ErrorStore

var Dispatcher = require('../dispatcher');

ErrorActions = {
  receiveError: function(errorMessage) {
    Dispatcher.dispatch({
      actionType: 'RAISE_ERROR',
      errorMessage: errorMessage
    });
  },

  clearErrors: function() {
    Dispatcher.dispatch({
      actionType: 'CLEAR_ERRORS'
    });
  }
};

module.exports = ErrorActions;
