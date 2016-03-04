// user Util
//    purpose: all action requests regarding users

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var UserActions = require('../actions/userActions');

var UserUtil = {
  fetchSingleUser: function(userId) {
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
