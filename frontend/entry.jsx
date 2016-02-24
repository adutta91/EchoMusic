// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// React components
var UserForms = require('./components/users/userForms');
var Logout = require('./components/users/logout');
var Header = require('./components/header/header');
var SongIndex = require('./components/songs/songIndex');
var UserProfile = require('./components/users/userProfile');

var SongForm = require('./components/songs/songForm');

var LogIn = React.createClass({
  render: function() {
    return (
      <div>
        <Header showButtons={false} />
        <div className="userForms">
          <UserForms />
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header showButtons={true} />
        <div className="imageBanner">Welcome to SongStorm!</div>
        <SongIndex />
        {this.props.children}
      </div>
    );
  }
});

var welcomeRoutes = (
  <Route path="/" component={LogIn}>
  </Route>
);

var appRoutes = (
  <Route path="/" component={App}>
    <Route path="/api/songs/new" component={SongForm}/>
    <Route path="/api/users/:id" component={UserProfile}/>
  </Route>
);

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
