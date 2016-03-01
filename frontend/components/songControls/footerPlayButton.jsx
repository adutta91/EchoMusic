// footer play button component
//    purpose: pause and play current song as appropriate
//
//    children: none
//    actions: pause and play song
//    info: appropriate available action

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');

// UTILS
var SongUtil = require('../../util/songUtil');

// CLASS DEFINITION ----------------------------------------***
var FooterPlayButton = React.createClass({

  getInitialState: function() {
    return ({
      currentSong: SongStore.currentSong(),
      playing: true
    })
  },

  _onChange: function() {
    this.setState( {
      currentSong: SongStore.currentSong(),
      playing: SongStore.playing()
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  playSong: function() {
    SongUtil.playSong(this.state.currentSong.id);
  },

  pauseSong: function() {
    SongUtil.pauseSong();
  },

  button: function() {
    if (this.state.playing) {
      return (
        <img src="assets/pause-button.png" className="footerSongButton" onClick={this.pauseSong} />
      );
    } else {
      return (
        <img src="assets/play-button.png" className="footerSongButton" onClick={this.playSong} />
      );
    }
  },

  render: function() {
    return (
      <div>
        {this.button()}
      </div>
    )
  }
});

module.exports = FooterPlayButton;
