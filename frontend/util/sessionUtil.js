// session util
//    purpose: all non-server action requests regarding the session

// ACTIONS
var SessionActions = require('../actions/sessionActions');

SessionUtil = {

  refreshSession: function(user) {
    SessionActions.refreshSession(user);
  }

};

module.exports = SessionUtil;
