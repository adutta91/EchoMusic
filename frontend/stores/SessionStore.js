var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _user = null;
var _loggedIn = false;

var SessionStore = new Store(Dispatcher);

SessionStore.loggedIn = function() {
  return _loggedIn;
};

SessionStore.currentUser = function() {
  return _user;
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'LOGIN_USER':
      login(payload.user);
      SessionStore.__emitChange();
      break;
    case 'LOGOUT_USER':
      logout();
      SessionStore.__emitChange();
      break;
    case 'REFRESH_SESSION':
      refresh(payload.user);
      SessionStore.__emitChange();
      break;
  }
};

var login = function(user) {
  _user = user;
  _loggedIn = true;
  var storedUser = JSON.stringify(user);
  localStorage.setItem('user', storedUser);
};

var refresh = function(user) {
  var user = localStorage.getItem('user');
  _user = JSON.parse(user);
  _loggedIn = true;
};

var logout = function() {
  localStorage.clear();
  _user = null;
  _loggedIn = false;
};

module.exports = SessionStore;
