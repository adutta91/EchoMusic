// Functions for all session actions
//    purpose: dispatch actions to SessionStore


var Dispatcher = require('../dispatcher');

var SessionActions = {
  logInUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'LOGIN_USER',
      user: user
    });
  },

  logOutUser: function() {
    Dispatcher.dispatch({
      actionType: 'LOGOUT_USER'
    });
  },

  showUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'SHOW_USER',
      user: user
    });
  },

  refreshSession: function(user) {
    Dispatcher.dispatch({
      actionType: 'REFRESH_SESSION',
      user: user
    });
  }

};

module.exports = SessionActions;
