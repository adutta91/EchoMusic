// uploaded song index item component
//    purpose: display a song that the user uploaded
//
//    children: PlayButton
//    actions: redirect to song show page on click
//    info: basic song info

var React = require('react')

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');

// CLASS DEFINITION ----------------------------------------***
var UploadedSongIndexItem = React.createClass({

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

  render: function() {
    return (
      <div className="userSongListItem" onClick={this._onClick}>
        <div className="songListItemInfo">
          {this.state.song.title}
        </div>
        <div onClick={this.artistClick} className="uploadListArtist" >{this.state.song.artist_name}</div>
        <div className="playButtonWrapper">
          <PlayButton songId={this.state.song.id} />
        </div>
      </div>
    )
  }
});

module.exports = UploadedSongIndexItem;
