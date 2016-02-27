var React = require('react');
var SessionStore = require('../../stores/SessionStore');
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
    var userId;
    if (SessionStore.currentUser()) {
      userId = SessionStore.currentUser().id;
    }
    ApiUtil.fetchExploreSongs(userId);
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
