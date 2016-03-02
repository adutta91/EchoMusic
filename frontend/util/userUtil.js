// user Util
//    purpose: all action requests regarding users

// ACTIONS
var UserActions = require('../actions/userActions');

UserUtil = {
  fetchSingleUser: function(userId) {
    console.log('props', userId);
    $.ajax({
      url: 'api/users/' + userId,
      method: 'GET',
      success: function(user) {
        UserActions.receiveSingleUser(user);
      }
    })
  }
}

module.exports = UserUtil;
