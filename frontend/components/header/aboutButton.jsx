// about button react component
//    purpose: open an about modal that displays info about the site
//
//    children: none
//    actions: open modal
//    info: modal has info describing the site

var React = require('react');

// MODAL DEPENDENCIES
var Modal = require('react-modal');
var style = require('../users/userModalStyle');

var AboutButton = React.createClass({
  getInitialState: function() {
    return ({
      open: false
    });
  },

  openModal: function() {
    this.setState({open: true});
  },

  closeModal: function() {
    this.setState({open: false});
  },

  _onClick: function() {
    this.openModal();
  },

  render: function() {
    return (
      <div>
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1457134370/about_ihbswh.png"
             className="aboutButton"
             onClick={this._onClick} />
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={style}>
          <div>HALLO</div>
         </Modal>
     </div>
    );
  }

});

module.exports = AboutButton;
