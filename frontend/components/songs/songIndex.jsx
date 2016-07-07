// song index component
//    purpose: display a list of unknown songs
//
//    children: ExploreIndexItem
//    actions: none
//    info: list of songs NOT uploaded by the current user

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var SongUtil = require('../../util/songUtil');

// REACT COMPONENTS
var ExploreIndexItem = require('./exploreIndexItem');

// CLASS DEFINITION ----------------------------------------***
var SongIndex = React.createClass({

  getInitialState: function() {
    return ({
      songs: SongStore.all()
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._songsChanged);
    SongUtil.fetchExploreSongs();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _songsChanged: function() {
    this.setState( { songs: SongStore.allShuffled() } );
  },

  getSongs: function() {
    var list = <div>No more songs to explore...</div>
    if (this.state.songs.length > 0) {
      var songs = this.state.songs;
      if (songs.length > 20) {
        songs = songs.slice(0, 20);
      }
      list = songs.map(function(song, index) {
        return <ExploreIndexItem key={song.id} song={song}/>
      });
    }
    return list;
  },

  render: function() {
    var user = SessionStore.currentUser();
    return (
      <div className="exploreSongTitle">
        <span className="exploreIndexTitle">Explore Songs</span>
        <div className="exploreIndex">
            { this.getSongs() }
        </div>
      </div>
    )
  }
});

module.exports = SongIndex;
