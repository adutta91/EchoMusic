// header react component
//    purpose: provide navigation throughout the site via buttons
//
//    children: Logout, Upload, Profile, Logo, AboutButton
//    actions: none
//    info: none


var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// REACT COMPONENTS
var Logo = require('./logo');
var AboutButton = require('./aboutButton');
var Logout = require('./logout');
var UploadSongButton = require('./uploadSongButton');
var ProfileButton = require('./profileButton');

// CLASS DEFINITION ----------------------------------------***
var Header = React.createClass({
  getInitialState: function() {
    return ({
      showButtons: SessionStore.loggedIn()
    });
  },

  toggleButtons: function() {
    this.setState( { showButtons: SessionStore.loggedIn() } )
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.toggleButtons);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  // composes html elements based onwhether buttons should be shown or not
  showButtons: function() {
    var headerButtons = <div/>;

    if (this.state.showButtons) {
      headerButtons = (
        <div className="headerButtons">
        <ProfileButton />
        <UploadSongButton />
        <Logout />
        </div>
      );
    }
    return headerButtons
  },

  render: function() {
    return (
      <div>
        <div className="appName">echo</div>
        <div className="header">
          <div className="headerLeft">
            <Logo />
            <AboutButton />
          </div>
          {this.showButtons()}
        </div>
      </div>
    )
  }
});

module.exports = Header;
