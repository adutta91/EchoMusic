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
var ApiUtil = require('../../util/apiUtil');

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
    ApiUtil.fetchExploreSongs();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _songsChanged: function() {
    this.setState( { songs: SongStore.all() } );
  },

  getSongs: function() {
    var list = <div>No more songs to explore!</div>
    if (this.state.songs.length > 0){
      list = this.state.songs.map(function(song, index) {
        return <ExploreIndexItem key={song.id} song={song}/>
      });
    }
    return list;
  },

  render: function() {
    var user = SessionStore.currentUser();
    return (
      <div>
        <div className="indexTitle">Explore:</div>
        <div className="songIndex">
          <br/>
          <br/>
          { this.getSongs() }
        </div>
      </div>
    )
  }
});

module.exports = SongIndex;
