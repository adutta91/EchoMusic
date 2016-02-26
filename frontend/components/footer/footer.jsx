var React = require('react');

var SongControls = require('../songControls/songControls');
var SongStore = require('../../stores/songStore');

var Footer = React.createClass({

  getInitialState: function() {
    return ({
      showSong: false
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    if (SongStore.playing()) {
      this.setState({showSong: true});
    } else {
      this.setState({showSong: false});
    }
  },

  render: function() {
    var song = <div/>
    if (this.state.showSong) {
      song = SongStore.currentSong().title
    }

    return (
      <div className="footer">
        Playing - {song}
      </div>
    );
  }

});

module.exports = Footer;
