// about button react component
//    purpose: open an about modal that displays info about the site
//
//    children: none
//    actions: open modal
//    info: modal has info describing the site

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
    height: '500px',
    width: '500px'
  }
};

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
          style={customStyle}>
          <div>
            <div className="aboutHeaderWrapper">
            <h3 className="aboutHeader">
              <div className="aboutTitle">Welcome to Echo!</div>
            </h3>
            </div>
            <br/>
            <div>
              <div>You can navigate the site using the icons along the header:</div>
              <br/>
              <div className="aboutDescriptions">
                <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1457299551/soundwave_k4gfjc.png"
                     className='logo'/>
                <span className="aboutExplanation">returns you to the the welcome page</span>
              </div>
              <div className="aboutDescriptions">
                <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456856776/ProfileImage.png"
                     className='aboutProfileButton'/>
                <span className="aboutExplanation">takes you to your profile page, where you can
                review the songs you are following and have uploaded, as well as
                edit your profile</span>
              </div>
              <div className="aboutDescriptions">
                <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456983040/add%20music.png"
                     className='uploadButton'/>
                <span className="aboutExplanation">will allow you to upload your own songs! Share away!</span>
              </div>
              <div className="aboutDescriptions">
                <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456984021/logout.png"
                     className='logoutButton'/>
                <span className="aboutExplanation">will log you out.</span>
              </div>
            </div>
            <p>This website was created using Ruby on Rails and ReactJS - check
            out the github repo <a href="https://github.com/adutta91/FinalProject">here</a></p>
            <p>Built by <a href="https://github.com/adutta91">Arjun Dutta</a></p>
          </div>
         </Modal>
     </div>
    );
  }

});

module.exports = AboutButton;
