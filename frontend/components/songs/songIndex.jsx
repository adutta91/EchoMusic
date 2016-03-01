// song index component
//    purpose: display a list of unknown songs
//
//    children: SongIndexItems
//    actions: none
//    info: list of songs NOT uploaded by the current user

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var SongIndexItem = require('./songIndexItem');

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

  render: function() {
    var user = SessionStore.currentUser();
    return (
      <div>
        <div className="indexTitle">Explore:</div>
        <div className="songIndex">
          <br/>
          <br/>
          {this.state.songs.map(function(song, index) {
            return <SongIndexItem key={index} song={song}/>
          })}
        </div>
      </div>
    )
  }
});

module.exports = SongIndex;
