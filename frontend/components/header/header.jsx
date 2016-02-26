var React = require('react');

var Logout = require('./logout');
var UploadSongButton = require('./uploadSongButton');
var ProfileButton = require('./profileButton');
var Logo = require('./logo');

var UserStore = require('../../stores/userStore')

var Header = React.createClass({
  getInitialState: function() {
    return ({
      showButtons: UserStore.loggedIn()
    });
  },

  toggleButtons: function() {
    this.setState( { showButtons: !this.state.showButtons } )
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.toggleButtons);
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
