// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// import { IndexRoute } from 'react-router'
// stores
var UserStore = require('./stores/userStore');

// React components
var UserProfile = require('./components/users/userProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/users/logIn');
var FullApp = require('./components/app/app');

var History = require('react-router').History;

window.UserStore = UserStore;

var App = React.createClass({

  getInitialState: function() {
    return ({
      user: UserStore.currentUser()
    });
  },

  checkForLogIn: function() {
    var user = this.state.user;
    if (user === null) {
      this.props.history.push('/api/session/new');
    } else {
      this.setState({ user: UserStore.currentUser() });
    }
  },

  _onChange: function() {
    if (!UserStore.loggedIn()) {
      this.props.history.push('/api/session/new');
    } else {
    }
  },

  componentDidMount: function() {
    this.checkForLogIn();
    this.listener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var appRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={FullApp} >
      <Route path="api/songs/new" component={SongForm}/>
    </IndexRoute>
    <Route path='api/session/new' component={LogIn} />
    <Route path="api/users/:id" component={UserProfile}/>
  </Route>
);


// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");

  ReactDOM.render(<Router>{appRoutes}</Router>, root);

});
