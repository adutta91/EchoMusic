// session util
//    purpose: all non-server action requests regarding the session

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var SessionActions = require('../actions/sessionActions');

SessionUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.logInUser(user);
        window.location = '/';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('create user error');
      }
    })
  },

  updateUser: function(user) {
    $.ajax({
      url: 'api/users/' + user.user.id,
      method: 'PATCH',
      data: user,
      success: function(user) {
        SessionActions.showUser(user);
      },
      error: function(user) {
        alert('user update error');
      }
    })
  },

  createSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.logInUser(user);
        window.location = '/';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('create session error');
      }
    });
  },

  resetSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: {id: user.id},
      success: function(user) {
        SessionActions.logOutUser();
      }
    });
  },

  refreshSession: function(user) {
    SessionActions.refreshSession(user);
  }

};

module.exports = SessionUtil;
