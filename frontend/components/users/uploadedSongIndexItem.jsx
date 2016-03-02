// uploaded song index item component
//    purpose: display a song that the user uploaded
//
//    children: PlayButton
//    actions: redirect to song show page on click
//    info: basic song info

var React = require('react')

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');

// CLASS DEFINITION ----------------------------------------***
var UploadedSongIndexItem = React.createClass({

  getInitialState: function() {
    return ({
      song: this.props.song
    })
  },

  render: function() {
    return (
      <div className="userSongListItem">
        <span className="songListItemInfo">
          {this.state.song.title}
          <span className="songListArtist">
            &nbsp; by {this.state.song.artist_name}
          </span>
        </span>
        <PlayButton songId={this.state.song.id} />
      </div>)
  }
});

module.exports = UploadedSongIndexItem;
