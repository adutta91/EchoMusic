// full app react component
//    purpose: to display the app to logged-in users
//
//    children: SongIndex
//    actions: none
//    info: a list of explorable songs

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// REACT COMPONENTS
var About = require('./about');
var SongIndex = require('../songs/songIndex');
var ExploreArtistsIndex = require('../artists/exploreArtistsIndex');

// CLASS DEFINITION ----------------------------------------***
var FullApp = React.createClass({

  indices: function() {
    return (
      <div className="indices">
        <SongIndex />
        <ExploreArtistsIndex />
      </div>
      );
  },

  render: function() {
    return (
      <div className="welcome">
        <div className="imageBanner">
          {this.indices()}
        </div>
      </div>
    );
  }
});

// <About />
module.exports = FullApp;
