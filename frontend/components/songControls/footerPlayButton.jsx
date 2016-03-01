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
    var button;
    if (this.state.playing) {
      button = (
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456869991/PauseButton.png"
             className="footerSongButton" onClick={this.pauseSong} />
      );
    } else {
      button = (
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456870006/PlayButton.png"
             className="footerSongButton" onClick={this.playSong} />
      );
    }
    return button
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
