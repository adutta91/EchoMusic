var UserActions = require('../actions/userActions');


UserUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        UserActions.logInUser(user);
        // window.location = '/api/songs';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('ya done goofed');
      }
    })
  },

  createSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        UserActions.logInUser(user);
        // window.location = '/api/songs';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('ya done goofed');
      }
    });
  },

  resetSession: function() {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function(user) {
        UserActions.logOutUser();
        window.location = '/';
      }
    });
  }

};

module.exports = UserUtil;
