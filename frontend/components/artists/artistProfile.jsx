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
      this.setState( { artist: artist });
      hashHistory.push('/artists/' + artist.id)
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
    this.setState({
      artistId: newProps.params.id
    });
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
        <ArtistSongIndex artist={this.state.artist}/>
      </div>
    );
  }
});

module.exports = ArtistProfile;
