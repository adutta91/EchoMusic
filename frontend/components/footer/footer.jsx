var React = require('react');

var SongControls = require('./songControls/songControls');

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <SongControls />
      </div>
    );
  }

});

module.exports = Footer;
