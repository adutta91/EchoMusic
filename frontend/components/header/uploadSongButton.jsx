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
    hashHistory.push('/songs/new');
  },

  render: function() {
    return (
      <div className="uploadWrapper">
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456983040/add%20music.png"
           onClick={this.handleUploadClicked}
           className="uploadButton"
           type="submit" />
     </div>
    );
  }
});

module.exports = UploadSongButton;
