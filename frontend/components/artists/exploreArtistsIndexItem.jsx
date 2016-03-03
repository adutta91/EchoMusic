// explore artists index item component
//    purpose: display artist
//
//    children: none
//    actions: redirect to artist page on click
//    info: artist name

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// CLASS DEFINITION ----------------------------------------***
var ExploreArtistsIndexItem = React.createClass({

  artistClick: function(event) {
    event.preventDefault();
    hashHistory.push('artists/' + this.props.artist.id);
  },

  render: function() {
    return (
      <div className="exploreArtistItem" onClick={this.artistClick}>
        <div>{this.props.artist.name}</div>
      </div>
    )
  }
});

module.exports = ExploreArtistsIndexItem;
