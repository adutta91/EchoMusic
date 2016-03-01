// song profile component
//    purpose: display all relevant song info
//
//    children: PlayButton
//    actions: play and pause song, (eventually more)
//    info: song title, artist, user, album

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');

// CLASS DEFINITION ----------------------------------------***
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
      <div>
      <div className="songDisplay">
        <div className="songTitleDisplay">
          {this.state.song.title}
        </div>
        <div className="songArtist">
          by {this.state.song.artist_name}
        </div>
        <PlayButton songId={this.props.params.id} />
        <br/>
      </div>
      <span>TODO: (1) 'follow' song, (2) display user, (3) display image</span>
      </div>
    );
  }
});

module.exports = SongProfile;
