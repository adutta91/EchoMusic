var React = require('react');

var SongStore = require('../../stores/songStore');
var PlayButton = require('../songControls/playButton');

var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {
        title: "",
        audio_url: "",
        artist_name: ""
      }
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
  },

  render: function() {
    return (
      <div className="songDisplay">
        <div className="songTitleDisplay">
          {this.state.song.title}
        </div>
        <div className="songArtist">
          by {this.state.song.artist_name}
        </div>
        <PlayButton songId={this.props.params.id}/>
      </div>
    );
  }
});

module.exports = SongProfile;
