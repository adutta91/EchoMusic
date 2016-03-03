// song profile component
//    purpose: display all relevant song info
//
//    children: PlayButton, FollowButton, UserDisplay
//    actions: play and pause song, (eventually more)
//    info: song title, artist, user, album

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var SongStore = require('../../stores/songStore');
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');
var FollowButton = require('./followButton');
var UserDisplay = require('../users/userDisplay');

// CLASS DEFINITION ----------------------------------------***
var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {
        title: "",
        audio_url: "",
        artist_name: ""
      },
      display: true,
      followed: false
    });
  },

  getStateFromStore: function() {
    var song =  SongStore.find(this.props.params.id);
    if (song) {
      this.setState( { song: song });
      if (SongStore.findFollowedSong(song.id)) {
        this.setState( { followed: true } );
      }
      if (this.state.song.user_id === SessionStore.currentUser().id) {
        this.setState( { display: false } );
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

  artistClick: function() {
    event.preventDefault();
    event.stopPropagation();
    hashHistory.push('/artists/' + this.state.song.artist_id);
  },

  followButton: function() {
    var button = (<div />);
    if (this.state.display) {
      button = (
        <FollowButton songId={this.props.params.id}
                      followed={this.state.followed}/>
      );
    }
    return button;
  },

  render: function() {
    return (
      <div className="songProfile">
        <div className="songDisplay">
          <div className="songTitleDisplay">
            {this.state.song.title}
          </div>
          &nbsp; - &nbsp;
          <div className="songArtist" onClick={this.artistClick}>
            {this.state.song.artist_name}
          </div>
          <PlayButton songId={this.props.params.id} />
          { this.followButton() }
        </div>
        <UserDisplay userId={this.state.song.user_id}/>
      </div>
    );
  }
});

module.exports = SongProfile;
