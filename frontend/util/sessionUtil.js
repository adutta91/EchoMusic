var SessionActions = require('../actions/sessionActions');

SessionUtil = {

  refreshSession: function(user) {
    SessionActions.refreshSession(user);
  }

};

module.exports = SessionUtil;
