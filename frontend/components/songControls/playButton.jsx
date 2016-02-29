var React = require('react');

var SongStore = require('../../stores/songStore');


var PlayButton = React.createClass({

  getInitialState: function() {
    return ({
      songId: this.props.songId
    });
  },

  playSong: function() {
    SongUtil.playSong(this.state.songId);
    // this.props.toggle();
  },

  render: function() {
    return (
      <button className="songButton" onClick={this.playSong}>Play</button>
    );
  }
});

module.exports = PlayButton;
