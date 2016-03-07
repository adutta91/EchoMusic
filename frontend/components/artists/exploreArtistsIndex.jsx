// explore artists index component
//    purpose: display artists
//
//    children: ExploreArtistIndexItem
//    actions: none
//    info: list of artists

var React = require('react');

// STORES
var ArtistStore = require('../../stores/artistStore');

// UTILS
var ArtistUtil = require('../../util/artistUtil');

// REACT COMPONENTS
var ExploreArtistsIndexItem = require('./exploreArtistsIndexItem');

// CLASS DEFINITION ----------------------------------------***
var ExploreArtistsIndex = React.createClass({

  getInitialState: function() {
    return ({
      artists: []
    });
  },

  componentDidMount: function() {
    this.artistListener = ArtistStore.addListener(this.updateArtists);
    ArtistUtil.fetchAllArtists();
  },

  componentWillUnmount: function() {
    this.artistListener.remove();
  },

  updateArtists: function() {
    this.setState( { artists: ArtistStore.all() } );
  },

  artists: function() {
    return this.state.artists.map(function(artist) {
      return (<ExploreArtistsIndexItem artist={artist} key={artist.id} />);
    });
  },

  render: function() {
    return (
      <div className="exploreArtistTitle">
        <span>Explore Artists</span>
        <div className="exploreIndex">
          {this.artists()}
        </div>
      </div>
    );
  }
});

module.exports = ExploreArtistsIndex;
