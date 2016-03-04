// artist song index component
//    purpose: display songs by this artist
//
//    children: ArtistSongIndexItem
//    actions: none
//    info: list of songs

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');
var SessionStore = require('../../stores/SessionStore');

// UTILS
var SongUtil = require('../../util/songUtil');

// REACT COMPONENTS
var SongIndexItem = require('../users/songIndexItem');

// CLASS DEFINITION ----------------------------------------***
var ArtistSongIndex = React.createClass({

  getInitialState: function() {
    return ({
      artist: {},
      songs: []
    });
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this._onChange);

    if(SessionStore.currentUser()){
      SongUtil.fetchFollowedSongs(SessionStore.currentUser().id);
    }
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({artist: newProps.artist});
    SongUtil.fetchArtistSongs(newProps.artist.id);
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  _onChange: function() {
    this.setState( { songs: SongStore.all() } );
  },

  songs: function() {
    return (this.state.songs.map(function(song, idx) {
      var followed = false;
      if (SongStore.findFollowedSong(song.id)) {
        followed = true;
      }
      return (<SongIndexItem
                song={song}
                showArtist={false}
                followed={followed}
                key={song.id}/>);
    }));
  },

  render: function() {
    return (
      <div className="artistSongIndex">{this.songs()}</div>
    )
  }
});

module.exports = ArtistSongIndex;
