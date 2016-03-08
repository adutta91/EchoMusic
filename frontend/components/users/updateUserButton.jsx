// update user button component
//    purpose: open edit user profile form
//
//    children: modal user update form
//    actions: open and close modal form
//    info: none

var React = require('react');

// MODAL DEPENDENCIES
var Modal = require('boron/WaveModal');

var contentStyle = {
  position                   : 'static',
  display                    : 'flex',
  justifyContent             : 'space-between',
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

// REACT COMPONENTS
var UpdateUserForm = require('./updateUserForm');

// CLASS DEFINITION ----------------------------------------***
var UpdateUserButton = React.createClass({

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
               onClick={this.showModal}/>
          <Modal ref="modal" contentStyle={contentStyle}>
            <UpdateUserForm modalCallback={this.hideModal}/>
          </Modal>
        </div>
      </div>
    )
  }

});

module.exports = UpdateUserButton;
