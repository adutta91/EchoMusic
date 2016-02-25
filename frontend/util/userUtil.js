var UserActions = require('../actions/userActions');


UserUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        UserActions.logInUser(user);
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
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('ya done goofed');
      }
    });
  },

  resetSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: {id: user.id},
      success: function(user) {
        debugger
        UserActions.logOutUser();
      }
    });
  }

};

module.exports = UserUtil;
