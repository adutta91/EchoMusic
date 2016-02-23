var UserActions = require('../actions/userActions');

UserUtil = {
  createUser: function(user) {
    $.post('/users', user, function(user) {
      alert("user created!");
    });
  },

  createSession: function(user) {
    $.post('/session', user, function(user) {
      alert("session created!");
    });
  }
};

module.exports = UserUtil;
