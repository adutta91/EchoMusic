var Dispatcher = require('../dispatcher');

UserActions = {
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

  refreshSession: function(user) {
    Dispatcher.dispatch({
      actionType: 'REFRESH_SESSION',
      user: user
    });
  }
};

module.exports = UserActions;
