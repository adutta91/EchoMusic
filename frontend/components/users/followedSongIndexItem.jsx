// followed song index item component
//    purpose: display a song that the user followed
//
//    children: PlayButton
//    actions: redirect to song show page on click
//    info: basic song info

var React = require('react');

var React = require('react')

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');

// CLASS DEFINITION ----------------------------------------***
var FollowedSongIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      song: this.props.song
    })
  },

  _onClick: function() {
    this.context.router.push('/songs/' + this.state.song.id);
  },

  render: function() {
    return (
      <div className="userFollowListItem" onClick={this._onClick}>
        <span className="followListItemInfo">
          {this.state.song.title}
          <span className="followListArtist">
            &nbsp; by {this.state.song.artist_name}
          </span>
        </span>
        <PlayButton songId={this.state.song.id} />
      </div>
    )
  }

});

module.exports = FollowedSongIndexItem;
