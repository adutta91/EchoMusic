// user profile component
//    purpose: display relevant user information
//
//    children: PlayButton, UpdateUserButton, FollowedSongIndex
//    actions: play an uploaded song
//    info: user info, user uploaded songs, user followed songs


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
        <div>
          <div id="userProfile">
            <span className="welcomeProfileMessage">
              Hello, {this.state.user.username}
            </span>
            <div className="profilePic">
              <UpdateUserButton user={this.state.user}/>
            </div>
          </div>
          <UploadedSongsIndex />
        </div>
        <div className="userMidCol">
          <div className="aboutUser">
            <div className="aboutUserTitle">About</div>
            <div className="aboutUserDesc">{this.state.user.description}</div>
          </div>
          <div className="followGroup">
            <div className="followedListTitle">Following</div>
            <div className="followedSongList">
              <FollowedSongsIndex user={this.state.user} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = UserProfile;
