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
var SongIndex = require('../songs/songIndex');

// CLASS DEFINITION ----------------------------------------***
var FullApp = React.createClass({

  render: function() {
    return (
      <div className="welcome">
        <div className="imageBanner"></div>
        <SongIndex />
      </div>
    );
  }
});

module.exports = FullApp;
