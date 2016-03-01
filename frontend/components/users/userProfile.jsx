// user profile component
//    purpose: display relevant user information
//
//    children: PlayButton, UpdateUserButton
//    actions: play an uploaded song
//    info: user info, user uploaded songs, user followed songs

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');
var UpdateUserButton = require('./updateUserButton');

// CLASS DEFINITION ----------------------------------------***
var UserProfile = React.createClass({
  getInitialState: function() {
    return ({
      user: {
        username: "",
        id: ""
      },
      songs: []
    })
  },

  _onSongChange: function() {
    this.setState( { songs: SongStore.all() } );
  },

  _onSessionChange: function() {
    this.setState( { user: SessionStore.currentUser() });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState( {user: SessionStore.currentUser() });
    
    this.songListener = SongStore.addListener(this._onSongChange);
    ApiUtil.fetchUserSongs(this.state.user.id);
  },

  componentWillUnmount: function() {
    this.songListener.remove();
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
        <div className= "userSongList">
          <span className="uploadedListTitle">Uploaded Songs:</span>
          {this.state.songs.map(function(song, index) {
            return (<div className="userSongListItem" key={index}>
                          <span className="songListItemInfo">
                            {song.title}
                            <span className="songListArtist">
                              &nbsp; by {song.artist_name}
                            </span>
                          </span>
                          <PlayButton songId={song.id} />
                    </div>)
          })}
        </div>
      </div>
    )
  }
});

module.exports = UserProfile;
