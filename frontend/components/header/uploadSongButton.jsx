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

var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.6)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'column',
    background                 : 'linear-gradient(to bottom right, #000000, #FF5B00)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    border                     : '3px solid black',
    outline                    : 'none',
    marginTop                  : '50px',
    height: '500px',
    width: '500px'
  }
};

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
         style={customStyle}>
         <SongForm />
       </Modal>
     </div>
    );
  }
});

module.exports = UploadSongButton;
