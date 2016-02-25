var React = require('react');

var Header = require('../header/header');
var SongIndex = require('../songs/songIndex');

var FullApp = React.createClass({
  render: function() {
    return (
      <div className="welcome">
        <div className="imageBanner"></div>
        <SongIndex />
        {this.props.children}
      </div>
    );
  }
});

module.exports = FullApp;
