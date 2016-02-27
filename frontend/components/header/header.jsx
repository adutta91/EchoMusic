var React = require('react');

var Logout = require('./logout');
var UploadSongButton = require('./uploadSongButton');
var ProfileButton = require('./profileButton');
var Logo = require('./logo');

var SessionStore = require('../../stores/SessionStore')

var Header = React.createClass({
  getInitialState: function() {
    return ({
      showButtons: SessionStore.loggedIn()
    });
  },

  toggleButtons: function() {
    this.setState( { showButtons: !this.state.showButtons } )
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.toggleButtons);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    var headerButtons = <div/>;

    if (this.state.showButtons) {
      headerButtons = (
        <div className="headerButtons">
          <UploadSongButton />
          <ProfileButton />
          <Logout />
        </div>
      );
    }

    return (
      <div>
        <div className="appName">SongStorm</div>
        <div className="header">
          <Logo />
          {headerButtons}
        </div>
      </div>
    )
  }
});

module.exports = Header;
