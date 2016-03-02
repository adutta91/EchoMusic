// follow button component
//    purpose: add a new SongFollow to the database to connect the user
//             and the song
//
//    children: none
//    actions: sends a create request to the SongFollow controller
//    info: none

var React = require('react');

// CLASS DEFINITION ----------------------------------------***
var FollowButton = React.createClass({

  _onClick: function() {
    alert('i was clicked');
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
