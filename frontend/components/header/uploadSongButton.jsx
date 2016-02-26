var React = require('react');
var History = require('react-router').History;


var UploadSongButton = React.createClass({

  mixins: [History],

  handleUploadClicked: function(event) {
    event.preventDefault();
    this.history.push('/songs/new');
  },

  render: function() {
    return (
      <input onClick={this.handleUploadClicked} className="uploadButton" type="submit" value="Upload!" />
    );
  }
});

module.exports = UploadSongButton;
