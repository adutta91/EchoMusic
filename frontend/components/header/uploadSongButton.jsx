// upload button react component
//    purpose: open the upload new song form (eventually modal)
//
//    children: none


var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// CLASS DEFINITION ----------------------------------------***
var UploadSongButton = React.createClass({

  handleUploadClicked: function(event) {
    event.preventDefault();
    this.context.router.push('/songs/new');
    hashHistory.push('/songs/new');
  },

  render: function() {
    return (
      <input onClick={this.handleUploadClicked} className="uploadButton" type="submit" value="Upload!" />
    );
  }
});

module.exports = UploadSongButton;
