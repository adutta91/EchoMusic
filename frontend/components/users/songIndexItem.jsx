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

// STORES
var SongStore = require('../../stores/songStore');

// REACT COMPONENTS
var PlayButton = require('../songControls/playButton');
var FollowButton = require('../songs/followButton');

// CLASS DEFINITION ----------------------------------------***
var SongIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    // var followed;
    // if (this.props.followed) {
    //   followed = this.props.followed;
    // } else {
    //   followed = false;
    // }

    return ({
      song: this.props.song,
      followed: this.props.followed,
      showArtist: this.props.showArtist
    })
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this.updateState);
    this.updateState();
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  updateState: function() {
    var song = SongStore.findFollowedSong(this.state.song.id);
    if (song) {
      this.setState({followed: true});
    } else {
      this.setState({followed: false});
    }
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
    return <FollowButton songId={this.state.song.id} followed={this.state.followed}/>
  },

  artist: function() {
    if (this.state.showArtist) {
      return (
        <span onClick={this.artistClick}>
          &nbsp; - <span className="followListArtist" >
                      {this.state.song.artist_name}
                   </span>
        </span>
      )
    } else {
      return <span/>
    }
  },

  render: function() {
    return (
      <div className="userFollowListItem" onClick={this._onClick}>
        <span className="followListItemInfo">
          {this.state.song.title}
          {this.artist()}
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
