// follow button component
//    purpose: add a new SongFollow to the database to connect the user
//             and the song
//
//    children: none
//    actions: sends a create request to the SongFollow controller
//    info: none

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// CLASS DEFINITION ----------------------------------------***
var FollowButton = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      songId: Number(this.props.songId),
      followed: this.props.followed
    });
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  _onChange: function() {
    this.setState( { followed: SongStore.following(this.state.songId) } )
  },

  followClick: function() {
    user = SessionStore.currentUser();
    var songFollow = {
      song_follow: {
        user_id: user.id,
        song_id: this.state.songId
      }
    }
    ApiUtil.createSongFollow(songFollow);
  },

  unFollowClick: function() {
    user = SessionStore.currentUser();
    var songFollow = {
      song_follow: {
        user_id: user.id,
        song_id: this.state.songId
      }
    }
    ApiUtil.deleteSongFollow(songFollow);
  },

  button: function() {
    var button = <div/>
    if (this.state.followed) {
      button = (
        <div className="followButton" onClick={this.unFollowClick}>
          UnFollow
        </div>
      );
    } else {
      button = (
        <div className="followButton" onClick={this.followClick}>
          Follow
        </div>
      );
    }
    return button;
  },

  render: function() {

    return (
      <div> {this.button()} </div>
    );
  }

});

module.exports = FollowButton;
