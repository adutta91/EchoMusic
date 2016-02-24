var React = require('react');

var Logout = require('../users/logout');
var UploadSongButton = require('./uploadSongButton');
var ProfileButton = require('./profileButton');

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="headerButtons">
          {this.props.showButtons ? <UploadSongButton /> : <div/> }
          {this.props.showButtons ? <ProfileButton /> : <div/> }
          {this.props.showButtons ? <Logout /> : <div/> }
        </div>
      </div>
    )
  }
});

module.exports = Header;
