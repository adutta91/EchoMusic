// error store
//    purpose: store relevant data on errors

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _errors = [];

var ErrorStore = new Store(Dispatcher);

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RAISE_ERROR':
      addError(payload.errorMessage);
      ErrorStore.__emitChange();
      break;
    case 'CLEAR_ERRORS':
      clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

ErrorStore.all = function() {
  return _errors;
};

ErrorStore.clear = function() {
  clearErrors();
};

ErrorStore.areErrors = function() {
  if (_errors.length > 0) {
    return true;
  } else {
    return false;
  }
};

var addError = function(message) {
  var messages = JSON.parse(message);
  if (messages.length) {
    messages.forEach(function(msg) {
      _errors.push(msg['message']);
    });
  } else {
    debugger;
    _errors.push(messages['message']);
  }
};

var clearErrors = function() {
  _errors = [];
};

module.exports = ErrorStore;
