var React = require('react');
var Modal = require('react-modal');

var style = require('./userModalStyle');
var UpdateUserForm = require('./updateUserform');

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
        <button className="updateUserButton" onClick={this.openModal}>
          Edit Profile
        </button>
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={style}>
            <UpdateUserForm />
        </Modal>
      </div>
    )
  }

});

module.exports = UpdateUserButton;
