// play button component
//    purpose: to play or pause a song, given a songId
//
//    children: none
//    actions: play and pause specific song
//    info: appropriate available action


var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');

// UTILS
var SongUtil = require('../../util/songUtil');

// CLASS DEFINITION ----------------------------------------***
var PlayButton = React.createClass({

  getInitialState: function() {
    return ({
      songId: Number(this.props.songId),
      playing: this.checkPlayingFromStore()
    });
  },

  checkPlayingFromStore: function() {
    if (SongStore.playing() &&
          SongStore.currentSong().id === Number(this.props.songId)) {
      return true;
    } else {
      return false;
    }
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this.toggle);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  toggle: function() {
    if (SongStore.playing() &&
          SongStore.currentSong().id === this.state.songId) {
      this.setState( { playing: true } );
    } else {
      this.setState( { playing: false } );
    }
  },

  pauseSong: function() {
    SongUtil.pauseSong();
    this.toggle();
  },

  playSong: function() {
    SongUtil.playSong(this.state.songId);
    this.setState({playing: true})
  },

  button: function() {
    var button;
    if (this.state.playing) {
      button = (
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456869991/PauseButton.png"
             className="songButton" onClick={this.pauseSong} />
      );
    } else {
      button = (
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456870006/PlayButton.png"
             className="songButton" onClick={this.playSong} />
      );
    }
    return button
  },

  render: function() {
    return (
      <div>
        {this.button()}
      </div>
    );
  }
});

module.exports = PlayButton;
