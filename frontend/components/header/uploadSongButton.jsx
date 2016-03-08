// upload button react component
//    purpose: open the upload new song form
//
//    children: none


var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// REACT COMPONENTS
var SongForm = require('../songs/songForm');

// MODAL DEPENDENCIES
var Modal = require('boron/WaveModal');

var contentStyle = {
  position                   : 'static',
  display                    : 'flex',
  justifyContent             : 'space-around',
  alignItems                 : 'center',
  flexDirection              : 'column',
  background                 : 'linear-gradient(to bottom right, #592000, #FF5B00)',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  borderRadius               : '15px',
  border                     : '3px solid black',
  outline                    : 'none',
  marginTop                  : '50px',
  height: '600px',
  width: '500px'
};

// CLASS DEFINITION ----------------------------------------***
var UploadSongButton = React.createClass({

  getInitialState: function() {
    return ({
      open: false
    })
  },

  showModal: function() {
    this.refs.modal.show();
    this.setState({open: true});
  },

  hideModal: function() {
    this.refs.modal.hide();
    this.setState({open: false});
  },

  _onClick: function(event) {
    event.preventDefault();
    this.showModal();
  },

  render: function() {
    return (
      <div className="uploadWrapper">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456983040/add%20music.png"
             onClick={this._onClick}
             className="uploadButton"
             type="submit" />
       <Modal ref="modal" contentStyle={contentStyle}>
         <SongForm modalCallback={this.hideModal} />
       </Modal>
     </div>
    );
  }
});

module.exports = UploadSongButton;
