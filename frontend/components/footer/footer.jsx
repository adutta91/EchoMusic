// footer react component
//    purpose: display info at a fixed position at the bottom of the screen
//
//    children: FooterPlayButton
//    actions: pause and play current song
//    info: current song title and artist


var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');

// REACT COMPONENTS
var FooterPlayButton = require('../songControls/footerPlayButton');

// CLASS DEFINITION ----------------------------------------***
var Footer = React.createClass({

  getInitialState: function() {
    return ({
      showSong: false,
      playing: false
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  // re-assesses whether it should show a song that is playing
  _onChange: function() {
    if (SongStore.currentSong() !== null) {
      this.setState({showSong: true});
    } else {
      this.setState({showSong: false});
    }
  },

  // composes the information for when a song is playing
  showPlaying: function() {
    var display = "";
    if (this.state.showSong) {
      display = (
        "Now playing:     " + SongStore.currentSong().title + " - (" +
          SongStore.currentSong().artist_name + ")"
      );
    }
    return display;
  },

  render: function() {
    var button = <div/>
    if (this.state.showSong) {
      button =  <FooterPlayButton />
    }
    return (
      <div className="footer">
        {this.showPlaying()}
        {button}
      </div>
    );
  }

});

module.exports = Footer;
