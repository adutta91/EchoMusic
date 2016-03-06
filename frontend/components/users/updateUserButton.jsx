// update user button component
//    purpose: open edit user profile form
//
//    children: modal user update form
//    actions: open and close modal form
//    info: none

var React = require('react');

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
    background                 : 'linear-gradient(to bottom right, #592000, #FF5B00)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    border                     : '3px solid black',
    outline                    : 'none',
    marginTop                  : '50px',
    height: '300px',
    width: '500px'
  }
};

// REACT COMPONENTS
var UpdateUserForm = require('./updateUserForm');

// CLASS DEFINITION ----------------------------------------***
var UpdateUserButton = React.createClass({

  getInitialState: function() {
    return ({
      open: false
    })
  },

  openModal: function() {
    this.setState({open: true});
  },

  closeModal: function() {
    this.setState({open: false });
  },

  findPicture: function() {
    var pic = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1456965706/beast.png";
    if (this.props.user.image_url) {
      pic = this.props.user.image_url;
    }
    return pic;
  },

  render: function() {
    return (
      <div className="profilePicWrapper">
        <div className="updateUserButton">
          <img className="profilePic"
               src={this.findPicture()}
               onClick={this.openModal}/>
          <Modal
            isOpen={this.state.open}
            onRequestClose={this.closeModal}
            style={customStyle}>

            <UpdateUserForm modalCallback={this.closeModal}/>
          </Modal>
        </div>
      </div>
    )
  }

});

module.exports = UpdateUserButton;
