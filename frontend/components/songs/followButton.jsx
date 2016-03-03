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

  followClick: function(event) {
    event.preventDefault();
    event.stopPropagation();

    user = SessionStore.currentUser();
    var songFollow = {
      song_follow: {
        user_id: user.id,
        song_id: this.state.songId
      }
    }
    ApiUtil.createSongFollow(songFollow);
  },

  unFollowClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    
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
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456979419/remove.png"
             className="followButton"
             onClick={this.unFollowClick}/>
      );
    } else {
      button = (
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456979318/add.png"
             className="followButton"
             onClick={this.followClick}/>
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
