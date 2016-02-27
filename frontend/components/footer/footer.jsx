var React = require('react');

var SongControls = require('../songControls/songControls');
var SongStore = require('../../stores/songStore');

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
      display = "Now playing: " + SongStore.currentSong().title;
    }
    return display;
  },

  render: function() {

    return (
      <div className="footer">
        {this.showPlaying()}
      </div>
    );
  }

});

module.exports = Footer;
