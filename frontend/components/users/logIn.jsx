var React = require('react');
var Header = require('../header/header');
var UserForms = require('./userForms');

var LogIn = React.createClass({
  render: function() {
    return (
      <div className="logInPage">
        <Header showButtons={false} />
        <div className="userForms">
        <UserForms />
        </div>
      </div>
    );
  }
});

module.exports = LogIn;
