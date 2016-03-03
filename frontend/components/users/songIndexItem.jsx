// followed song index item component
//    purpose: display a song that the user followed
//
//    children: PlayButton, FollowButton
//    actions: redirect to song show page on click
//    info: basic song info

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');
var FollowButton = require('../songs/followButton');

// CLASS DEFINITION ----------------------------------------***
var SongIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      song: this.props.song
    })
  },

  _onClick: function(event) {
    event.preventDefault();
    hashHistory.push('/songs/' + this.state.song.id);
  },

  artistClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    hashHistory.push('/artists/' + this.state.song.artist_id);
  },

  followButton: function() {
    
    <FollowButton songId={this.state.song.id} followed={true}/>
  },

  render: function() {
    return (
      <div className="userFollowListItem" onClick={this._onClick}>
        <span className="followListItemInfo">
          {this.state.song.title}
          <span onClick={this.artistClick}>
            &nbsp; - <span className="followListArtist" >{this.state.song.artist_name}</span>
          </span>
        </span>
        <div className="songManipulators">
          <PlayButton songId={this.state.song.id} />
          {this.followButton()}
        </div>
      </div>
    )
  }

});

module.exports = SongIndexItem;
