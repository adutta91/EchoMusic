// React requires
var React = require('react');
var ReactDOM = require('react-dom');
var SessionStore = require('./stores/sessionStore');

var UserForms = require('./components/users/userForms');
var Logout = require('./components/users/logout')

var LogInApp = React.createClass({

  render: function() {
    return (
      <UserForms />
    );
  }

});

var App = React.createClass({

  render: function() {
    return (
      <Logout />
    );
  }

});

// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  var welcome = document.querySelector("#welcome");

  if (root !== null) {
    ReactDOM.render(<App />, root);
  } else {
    ReactDOM.render(<LogInApp />, welcome);
  }
});
