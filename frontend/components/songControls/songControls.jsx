var React = require('react');

var PlayButton = require('./playButton');

var SongControls = React.createClass({
  render: function() {
    return (
      <div className="songControls">
        <PlayButton />
      </div>
    );
  }
});

module.exports = SongControls;
