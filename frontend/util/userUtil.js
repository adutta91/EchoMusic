var UserActions = require('../actions/userActions');

UserUtil = {
  createUser: function(user) {
    $.post('/users', user, function(user) {
      alert("user created!");
    });
  },
// TODO: error callbacks
  createSession: function(user) {
    $.post('/session', user, function(user) {
      console.log('session created');
      window.location = '/';
    });
  }
};

module.exports = UserUtil;
