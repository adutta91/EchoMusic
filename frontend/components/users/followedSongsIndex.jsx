// followed songs index component
//    purpose: display all of the songs the user follows
//
//    children: SongIndexItem
//    actions: none
//    info: list of songs

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var SongIndexItem = require('./songIndexItem');

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
    ApiUtil.fetchFollowedSongs(SessionStore.currentUser().id);
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this._onSongChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);

    if(SessionStore.currentUser()){
      ApiUtil.fetchFollowedSongs(SessionStore.currentUser().id);
      this.setState( { user: SessionStore.currentUser() } );
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
          return <SongIndexItem song={song} key={song.id} />
        })}
      </div>
    )
  }
});

module.exports = FollowedSongIndex;
