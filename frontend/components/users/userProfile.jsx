// user profile component
//    purpose: display relevant user information
//
//    children: PlayButton, UpdateUserButton, FollowedSongIndex
//    actions: play an uploaded song
//    info: user info, user uploaded songs, user followed songs

// TODO: refactor uploaded songs into separate component

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var UpdateUserButton = require('./updateUserButton');
var FollowedSongsIndex = require('./followedSongsIndex');
var UploadedSongsIndex = require('./uploadedSongsIndex');

// CLASS DEFINITION ----------------------------------------***
var UserProfile = React.createClass({
  getInitialState: function() {
    return ({
      user: {
        username: "",
        id: ""
      }
    })
  },

  _onSessionChange: function() {
    debugger;
    this.setState( { user: SessionStore.currentUser() });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState( {user: SessionStore.currentUser() });
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  render: function() {
    return (
      <div className="userPage">
        <div id="userProfile">
          <span className="welcomeProfileMessage">
            Hello, {this.state.user.username}
          </span>
          <div className="picture">
            <img src={this.state.user.image_url} className="profilePicture" />
            <UpdateUserButton  />
          </div>
        </div>
        <UploadedSongsIndex />
        <div className="followedSongList">
          <FollowedSongsIndex user={this.state.user} />
        </div>
      </div>
    )
  }
});

module.exports = UserProfile;
