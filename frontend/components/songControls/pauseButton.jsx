var React = require('react');

var SongStore = require('../../stores/songStore');

var PauseButton = React.createClass({
  getInitialState: function() {
    return ({
      songId: this.props.songId
    });
  },

  pauseSong: function() {
    SongUtil.pauseSong();
    this.props.toggle();
  },

  render: function() {
    return (
      <button className="songButton" onClick={this.pauseSong}>Pause</button>
    );
  }
});

module.exports = PauseButton;
