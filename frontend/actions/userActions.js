// functions for all user actions
//    purpose: dispatch actions to UserStore

var Dispatcher = require('../dispatcher');

var UserActions = {
  receiveSingleUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USER',
      user: user
    });
  }
};

module.exports = UserActions;
