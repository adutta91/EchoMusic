// session util
//    purpose: all non-server action requests regarding the session

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var SessionActions = require('../actions/sessionActions');
var ErrorActions = require('../actions/errorActions');

SessionUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.logInUser(user);
        hashHistory.push('/');
      },
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
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
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
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
        hashHistory.push('/');
      },
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
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
      },
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
      }
    });
  },

  refreshSession: function(user) {
    SessionActions.refreshSession(user);
  }

};

module.exports = SessionUtil;
