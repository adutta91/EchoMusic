var React = require('react');

var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');
var ApiUtil = require('../../util/apiUtil');
var PlayButton = require('../songControls/playButton');

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
        <div id="userProfile">Hello, &nbsp; {this.state.user.username}</div>
        <div className= "userSongList">
          Uploaded Songs:
          {this.state.songs.map(function(song) {
            return (<div className="userSongListItem">
                          <span>{song.title} by {song.artist_name}</span>
                          <PlayButton songId={song.id} />
                    </div>)
          })}
        </div>
      </div>
    )
  }
});

module.exports = UserProfile;
