var React = require('react');

var PauseButton = React.createClass({

  getInitialState: function() {
    return ({
      clickCallback: this.props.clickCallback
    })
  },

  render: function() {
    return (
      <div id="pauseButton" />
    );
  }
});

module.exports = PauseButton;
