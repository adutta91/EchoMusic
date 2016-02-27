var React = require('react');
var UserStore = require('../../stores/userStore');
var SongStore = require('../../stores/songStore');
var SongUtil = require('../../util/songUtil');
var ApiUtil = require('../../util/apiUtil');

var SongIndexItem = require('./songIndexItem');

var SongIndex = React.createClass({

  getInitialState: function() {
    return ({
      songs: SongStore.all()
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._songsChanged);
    ApiUtil.fetchSongs();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _songsChanged: function() {
    this.setState( { songs: SongStore.all() } );
  },

  render: function() {
    var user = UserStore.currentUser();
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
