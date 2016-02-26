var React = require('react');
var UserUtil = require('../../util/userUtil');
var History = require('react-router').History;
var UserStore = require('../../stores/userStore');

var Logout = React.createClass({
  mixins: [History],

  handleLogout: function(event) {
    event.preventDefault();
    var user = UserStore.currentUser();
    UserUtil.resetSession(user);
    this.history.push('/session/new');
  },

  render: function() {
    return (
      <input onClick={this.handleLogout} className="logoutButton" type="submit" value="Logout"/>
    )
  }
});

module.exports = Logout;
