// guest login component
//    purpose: sign in the user with a guest account
//
//    children: none
//    actions: login
//    info: none

var React = require('react');

// UTILS
var SessionUtil = require('../../util/sessionUtil');

// CLASS DEFINITION ----------------------------------------***
var GuestLogin = React.createClass({

  _onClick: function() {
    var user = {user: {username: "guest", password: "password"}};
    SessionUtil.createSession(user);
  },

  render: function() {
    return (
      <div className="guestLogin"
           onClick={this._onClick}>
      Login as Guest!
      </div>
    )
  }
});

module.exports = GuestLogin;
