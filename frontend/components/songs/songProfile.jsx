// song profile component
//    purpose: display all relevant song info
//
//    children: PlayButton, FollowButton
//    actions: play and pause song, (eventually more)
//    info: song title, artist, user, album

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');
var FollowButton = require('./followButton');

// CLASS DEFINITION ----------------------------------------***
var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {
        title: "",
        audio_url: "",
        artist_name: ""
      },
      isFollowed: false
    });
  },

  getStateFromStore: function() {
    var song =  SongStore.find(this.props.params.id);
    if (song) {
      this.setState( { song: song });
      if (SongStore.findFollowedSong(song.id)) {
        this.setState( { isFollowed: true } );
      }
    }

  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this.getStateFromStore);
    ApiUtil.fetchSingleSong(this.props.params.id);
    if (SessionStore.loggedIn()){
      ApiUtil.fetchFollowedSongs(SessionStore.currentUser().id)
    }
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  followButton: function() {
    var button = (<FollowButton songId={this.props.params.id} />);
    if (this.state.isFollowed) {
      button = <div />
    }
    return button;
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
      { this.followButton() }
      </div>
    );
  }
});

module.exports = SongProfile;
