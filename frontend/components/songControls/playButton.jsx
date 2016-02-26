var React = require('react');
var History = require('react-router').History;

var SongStore = require('../../stores/songStore');

var PlayButton = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({
      songId: this.props.songId
    });
  },

  playSong: function() {
    SongUtil.playSong(this.state.songId);

    var audio = new Audio();
    audio.src = SongStore.currentSong().audio_url;

    audio.addEventListener('canplay', function() {
      audio.play();
    });

    audio.addEventListener('ended', function() {
      SongUtil.endSong();
    });

  },

  render: function() {
    return (
      <button className="playButton" onClick={this.playSong}>Play</button>
    );
  }
});

module.exports = PlayButton;
