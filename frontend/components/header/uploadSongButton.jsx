// upload button react component
//    purpose: open the upload new song form (eventually modal)
//
//    children: none


var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// REACT COMPONENTS
var SongForm = require('../songs/songForm');

// MODAL DEPENDENCIES
var Modal = require('react-modal');
var style = require('../users/userModalStyle');

// CLASS DEFINITION ----------------------------------------***
var UploadSongButton = React.createClass({

  getInitialState: function() {
    return ({
      open: false
    })
  },

  openModal: function() {
    this.setState({open: true});
  },

  closeModal: function() {
    this.setState({open: false});
  },

  _onClick: function(event) {
    event.preventDefault();
    this.openModal();
    // hashHistory.push('/songs/new');
  },

  render: function() {
    return (
      <div className="uploadWrapper">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456983040/add%20music.png"
             onClick={this._onClick}
             className="uploadButton"
             type="submit" />
       <Modal
         isOpen={this.state.open}
         onRequestClose={this.closeModal}
         style={style}>
         <SongForm />
       </Modal>
     </div>
    );
  }
});

module.exports = UploadSongButton;
