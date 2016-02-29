var React = require('react');

var SongControls = require('../songControls/songControls');
var SongStore = require('../../stores/songStore');
var FooterPlayButton = require('../songControls/footerPlayButton');

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

  _onChange: function() {
    if (SongStore.currentSong() !== null) {
      this.setState({showSong: true});
    } else {
      this.setState({showSong: false});
    }
  },

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
