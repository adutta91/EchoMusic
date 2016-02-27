var React = require('react');
var History = require('react-router').History;
var SessionStore = require('../../stores/SessionStore');
var ApiUtil = require('../../util/apiUtil');
var SongUtil = require('../../util/songUtil');

var Logout = React.createClass({
  mixins: [History],

  handleLogout: function(event) {
    event.preventDefault();
    var user = SessionStore.currentUser();
    ApiUtil.resetSession(user);
    SongUtil.endSong();
    this.history.push('/session/new');
  },

  render: function() {
    return (
      <input onClick={this.handleLogout} className="logoutButton" type="submit" value="Logout"/>
    )
  }
});

module.exports = Logout;
