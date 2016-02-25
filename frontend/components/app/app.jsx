var React = require('react');

var Header = require('../header/header');
var SongIndex = require('../songs/songIndex');

var FullApp = React.createClass({
  render: function() {
    return (
      <div className="welcome">
        <Header showButtons={true} />
        <div className="imageBanner">Welcome to SongStorm!</div>
        <SongIndex />
        {this.props.children}
      </div>
    );
  }
});

module.exports = FullApp;
