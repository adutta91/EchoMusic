// logout button react component
//    purpose: button for ending the current session
//
//    children: none

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');
var SongUtil = require('../../util/songUtil');


// CLASS DEFINITION ----------------------------------------***
var Logout = React.createClass({

  handleLogout: function(event) {
    event.preventDefault();
    var user = SessionStore.currentUser();
    ApiUtil.resetSession(user);
    SongUtil.endSong();
  },

  render: function() {
    return (
      <input onClick={this.handleLogout} className="logoutButton" type="submit" value="Logout"/>
    )
  }
});

module.exports = Logout;
