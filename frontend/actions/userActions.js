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
    })
  }
};

module.exports = UserActions;
