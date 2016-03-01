var React = require('react');
var SessionStore = require('../../stores/SessionStore');
var ApiUtil = require('../../util/apiUtil');
var SongUtil = require('../../util/songUtil');

var Logout = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleLogout: function(event) {
    event.preventDefault();
    var user = SessionStore.currentUser();
    ApiUtil.resetSession(user);
    SongUtil.endSong();
    this.context.router.push('/session/new');
  },

  render: function() {
    return (
      <input onClick={this.handleLogout} className="logoutButton" type="submit" value="Logout"/>
    )
  }
});

module.exports = Logout;
