var React = require('react');

var SongStore = require('../../stores/songStore');
var PlayButton = require('../songControls/playButton');
var PauseButton = require('../songControls/pauseButton');

var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {
        title: "",
        audio_url: "",
        artist_name: ""
      },
      playing: false
    });
  },

  getStateFromStore: function() {
    var song =  SongStore.find(this.props.params.id);
    if (song) {
      this.setState( { song: SongStore.find(this.props.params.id) });
    }
  },

  componentDidMount: function() {
    this.getStateFromStore();
    this.listener = SongStore.addListener(this.toggleButton);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  toggleButton: function() {
    this.setState( { playing: !this.state.playing } );
  },

  button: function() {
    var button;

    if (this.state.playing) {
      button = <PauseButton songId={this.props.params.id}
                            toggle={this.toggleButton}/>
    } else {
      button = <PlayButton songId={this.props.params.id}
                           toggle={this.toggleButton}/>
    }
    return button;
  },

  render: function() {
    var button = this.button();
    return (
      <div className="songDisplay">
        <div className="songTitleDisplay">
          {this.state.song.title}
        </div>
        <div className="songArtist">
          by {this.state.song.artist_name}
        </div>
        {this.button()}
      </div>
    );
  }
});

module.exports = SongProfile;
