// uploaded Songs index component
//    purpose: display list of songs uploaded by the user
//
//    children: UploadedSongIndexItem
//    actions: none
//    info: list of songs

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var UploadedSongIndexItem = require('./uploadedSongIndexItem');

// CLASS DEFINITION ----------------------------------------***
var UploadedSongsIndex = React.createClass({

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
    this.songListener = SongStore.addListener(this._onSongChange);
    ApiUtil.fetchUserSongs(this.state.user.id);

    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState( {user: SessionStore.currentUser() });
  },

  componentWillUnmount: function() {
    this.songListener.remove();
    this.sessionListener.remove();
  },

  render: function() {
    return (
      <div>
        <span className="uploadedListTitle">Uploaded Songs:</span>
        {this.state.songs.map(function(song, index) {
          return (<UploadedSongIndexItem song={song} key={index}/>)
        })}
      </div>
    )
  }
});

module.exports = UploadedSongsIndex;
