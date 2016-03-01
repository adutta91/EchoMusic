var React = require('react');

var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');
var ApiUtil = require('../../util/apiUtil');
var PlayButton = require('../songControls/playButton');
var UpdateUserButton = require('./updateUserButton');

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

  _onChange: function() {
    var songs = SongStore.all();
    this.setState( { songs: songs } );
  },

  componentDidMount: function() {
    var user = SessionStore.currentUser();
    this.setState({ user: user })
    this.listener = SongStore.addListener(this._onChange);
    ApiUtil.fetchUserSongs(user.id)
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    return (
      <div className="userPage">
        <div id="userProfile">
          Hello, &nbsp; {this.state.user.username}
        </div>
        <UpdateUserButton  />
        <span> TODO: (1) edit user form (2) display image (3) show followed songs</span>
        <div className= "userSongList">
          Uploaded Songs:
          {this.state.songs.map(function(song, index) {
            return (<div className="userSongListItem" key={index}>
                          <span className="songListItemInfo">
                            {song.title}
                            <span className="songListArtist"> by {song.artist_name}</span>
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
