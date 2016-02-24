var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _user = [];
var SessionStore = new Store(Dispatcher);

SessionStore.user = function() {
  return _user[0];
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'LOGIN_USER':
      add(payload.user);
      SessionStore.__emitChange();
      break;
    case 'LOGOUT_USER':
      console.log(_user);
      clear();
      console.log(_user);
      SessionStore.__emitChange();
      break;
  }
};

var clear = function() {
  _user = [];
};

var add = function(user) {
  _user[0] = user;
};

module.exports = SessionStore;
