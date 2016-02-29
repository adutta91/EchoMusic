var React = require('react');

var SongStore = require('../../stores/songStore');
var SongUtil = require('../../util/songUtil');

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
      return (<button className="songButton" onClick={this.pauseSong}>Pause</button>)
    } else {
      return (<button className="songButton" onClick={this.playSong}>Play</button>)
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
