var React = require('react');

var SongStore = require('../../stores/songStore');
var SongUtil = require('../../util/songUtil');

var SongIndexItem = require('./songIndexItem');

var SongIndex = React.createClass({

  getInitialState: function() {
    return ({
      songs: SongStore.all()
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._songsChanged);
    SongUtil.fetchSongs();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _songsChanged: function() {
    this.setState( { songs: SongStore.all() } );
  },

  render: function() {
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
