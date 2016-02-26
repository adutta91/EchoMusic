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
      <form onSubmit={this.handleUploadClicked}>
        <input className="uploadButton" type="submit" value="Upload!" />
      </form>
    );
  }
});

module.exports = UploadSongButton;
