var UserActions = require('../actions/userActions');

UserUtil = {

  refreshSession: function(user) {
    UserActions.refreshSession(user);
  }
  
};

module.exports = UserUtil;
