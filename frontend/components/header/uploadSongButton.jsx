var React = require('react');
var History = require('react-router').History;


var UploadSongButton = React.createClass({

  mixins: [History],

  handleSubmit: function() {

    this.history.push('/api/songs/new');
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="uploadButton" type="submit" value="Upload!" />
      </form>
    );
  }
});

module.exports = UploadSongButton;
