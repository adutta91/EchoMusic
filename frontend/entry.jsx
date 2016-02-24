// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// stores
var SessionStore = require('./stores/sessionStore');

// React components
var UserForms = require('./components/users/userForms');
var Logout = require('./components/users/logout');
var Header = require('./components/header/header');

var LogIn = React.createClass({
  render: function() {
    return (
      <div className="userForms">
        <UserForms />
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="imageBanner"/>
      </div>
    );
  }
});

var appRoutes = (
  <Route path="/" component={App}>
  </Route>
)

var welcomeRoutes = (
  <Route path="/" component={UserForms}>
  </Route>
)

// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  var welcome = document.querySelector("#welcome");

  if (root !== null) {
    ReactDOM.render(<Router>{appRoutes}</Router>, root);
  } else {
    ReactDOM.render(<Router>{welcomeRoutes}</Router>, welcome);
  }
});
