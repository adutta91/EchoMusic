// song controls component
//    purpose: currently inactive (VESTIGIAL)
//
//    children: PlayButton
//    actions: manipulate current audio track
//    info: available actions

var React = require('react');

// REACT COMPONENTS
var PlayButton = require('./playButton');

// CLASS DEFINITION ----------------------------------------***
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
