var React = require('react');

var SongStore = require('../../stores/songStore');
var PlayButton = require('../songControls/playButton');

var ApiUtil = require('../../util/apiUtil');

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
    this.stateListener = SongStore.addListener(this.getStateFromStore);
    ApiUtil.fetchSingleSong(this.props.params.id);
  },

  componentWillUnmount: function() {
    this.stateListener.remove();
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
        <PlayButton songId={this.props.params.id} />
      </div>
    );
  }
});

module.exports = SongProfile;
