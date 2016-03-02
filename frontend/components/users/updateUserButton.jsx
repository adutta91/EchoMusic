// update user button component
//    purpose: open edit user profile form
//
//    children: modal user update form
//    actions: open and close modal form
//    info: none

var React = require('react');

// MODAL DEPENDENCIES
var Modal = require('react-modal');
var style = require('./userModalStyle');

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

  render: function() {
    return (
      <div className="updateUserButton">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456897486/Edit.png"
             className="updateUserButton" onClick={this.openModal} />
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={style}>

          <UpdateUserForm modalCallback={this.closeModal}/>
        </Modal>
      </div>
    )
  }

});

module.exports = UpdateUserButton;
