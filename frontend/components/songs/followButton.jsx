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

// UTILS
var ApiUtil = require('../../util/apiUtil');

// CLASS DEFINITION ----------------------------------------***
var FollowButton = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      songId: Number(this.props.songId)
    });
  },

  _onClick: function() {
    user = SessionStore.currentUser();
    var songFollow = {
      song_follow: {
        user_id: user.id,
        song_id: this.state.songId
      }
    }
    ApiUtil.createSongFollow(songFollow);
  },

  render: function() {
    return (
      <div className="followButton" onClick={this._onClick}>
        Follow
      </div>
    )
  }

});

module.exports = FollowButton;
