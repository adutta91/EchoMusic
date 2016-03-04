// logout button react component
//    purpose: button for ending the current session
//
//    children: none

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// UTILS
var SessionUtil = require('../../util/sessionUtil');
var SongUtil = require('../../util/songUtil');


// CLASS DEFINITION ----------------------------------------***
var Logout = React.createClass({

  handleLogout: function(event) {
    event.preventDefault();

    var user = SessionStore.currentUser();
    SessionUtil.resetSession(user);
    if (SongStore.playing()) {
      SongUtil.endSong();
    }
    hashHistory.push('session/new');
  },

  render: function() {
    return (
      <div className="logoutWrapper">
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456984021/logout.png"
           onClick={this.handleLogout}
           className="logoutButton" />
     </div>
    )
  }
});

module.exports = Logout;
