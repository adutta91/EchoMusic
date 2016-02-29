var React = require('react');

var Header = require('../header/header');
var SongIndex = require('../songs/songIndex');
var SongStore = require('../../stores/songStore');
var ApiUtil = require('../../util/apiUtil');

var SessionStore = require('../../stores/SessionStore');

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
