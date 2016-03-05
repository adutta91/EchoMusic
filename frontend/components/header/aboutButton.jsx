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
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1457135625/aboutButton_kc2niy.png"
             className="aboutButton"
             onClick={this._onClick} />
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={style}>
          <div>
            <h3>Welcome to Echo! The music sharing app that smiles back... Explore
            songs and artists below!</h3>
            <br/>
            <p>
              You can navigate the site using the icons along the header:
              <br/>
              The Logo returns you to the the welcome page
              <br/>
              The Profile icon takes you to your profile page, where you can
              review the songs you are following and have uploaded, as well as
              edit your profile
              <br/>
              The Music icon will allow you to upload your own songs! Share away!
              <br/>
              The Power icon will log you out.
            </p>
            <br/>
            <br/>
            <p>This website was created using Ruby on Rails and ReactJS - check
            out the github repo <a href="https://github.com/adutta91/FinalProject">here</a></p>
            <p>built by <a href="https://github.com/adutta91">Arjun Dutta</a></p>
          </div>
         </Modal>
     </div>
    );
  }

});

module.exports = AboutButton;
