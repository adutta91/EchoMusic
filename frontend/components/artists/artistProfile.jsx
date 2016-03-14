// artist profile component
//    purpose: display artist info
//
//    children: ArtistSongIndex
//    actions: none
//    info: artist info

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var ArtistStore = require('../../stores/artistStore');

// UTILS
var ArtistUtil = require('../../util/artistUtil');

// REACT COMPONENTS
var ArtistSongIndex = require('./artistSongsIndex');
var ExploreArtistsIndex = require('./exploreArtistsIndex');

// CLASS DEFINITION ----------------------------------------***
var ArtistProfile = React.createClass({

  getInitialState: function() {
    return ({
      artist: {
        name: ""
      },
      artistId: this.props.params.id
    })
  },

  getStateFromStore: function() {
    var artist =  ArtistStore.find(this.props.params.id);
    if (artist) {
      this.setState( {
        artist: artist,
        artistId: artist.id
      });
    }
  },

  componentDidMount: function() {
    this.artistListener = ArtistStore.addListener(this._onChange);
    ArtistUtil.fetchSingleArtist(this.props.params.id)
  },

  componentWillUnmount: function() {
    this.artistListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.params.id !== this.state.artistId) {
      ArtistUtil.fetchSingleArtist(newProps.params.id);
    }
  },

  profilePic: function() {
    if (this.state.artist.image_url) {
      return (
        <div className="artistPicWrapper">
          <img className="artistPic" src={this.state.artist.image_url} />
        </div>
      )
    }
  },

  _onChange: function() {
    this.getStateFromStore();
  },

  render: function() {
    return (
      <div className="artistProfile">
        <div className="artistDisplay">
          <span className="artistTitleDisplay">{this.state.artist.name}</span>
        </div>
        <div className="artistContent">
          {this.profilePic()}
          <ArtistSongIndex artist={this.state.artist}/>
          <ExploreArtistsIndex />
        </div>
      </div>
    );
  }
});

module.exports = ArtistProfile;
