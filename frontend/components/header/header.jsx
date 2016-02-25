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
    return (
      <div className="header">
        <Logo />
        <div className="appName">SongStorm</div>
        <div className="headerButtons">
          {this.state.showButtons ? <UploadSongButton /> : <div/> }
          {this.state.showButtons ? <ProfileButton /> : <div/> }
          {this.state.showButtons ? <Logout /> : <div/> }
        </div>
      </div>
    )
  }
});

module.exports = Header;
