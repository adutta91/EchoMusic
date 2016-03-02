// followed songs index component
//    purpose: display all of the songs the user follows
//
//    children: FollowedSongIndexItem
//    actions: none
//    info: list of songs

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var FollowedSongIndexItem = require('./followedSongIndexItem');

// CLASS DEFINITION ----------------------------------------***
var FollowedSongIndex = React.createClass({

  getInitialState: function() {
    return ({
      user: SessionStore.currentUser(),
      songs: []
    });
  },

  _onSongChange: function() {
    this.setState( { songs: SongStore.followedSongs() } );
  },

  _onSessionChange: function() {
    this.setState( { user: SessionStore.currentUser() } );
  },

  componentWillMount: function() {
    this.songListener = SongStore.addListener(this._onSongChange);

    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState( { user: SessionStore.currentUser() } );
  },

  componentDidMount: function() {
    if(this.state.user){
      ApiUtil.fetchFollowedSongs(this.state.user.id);
    }
  },

  componentWillUnmount: function() {
    this.songListener.remove();
    this.sessionListener.remove();
  },

  render: function() {
    return (
      <div>
        <div className="followedListTitle">Following</div>
        {this.state.songs.map(function(song, index) {
          return <FollowedSongIndexItem song={song} key={song.id} />
        })}
      </div>
    )
  }
});

module.exports = FollowedSongIndex;
