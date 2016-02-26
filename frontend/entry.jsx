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
var SongStore = require('./stores/songStore');

// React components
var UserProfile = require('./components/users/userProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/users/logIn');
var LoggedInApp = require('./components/app/app');
var Header = require('./components/header/header');
var SongProfile = require('./components/songs/songProfile');
var Footer = require('./components/footer/footer');


// window.UserStore = UserStore;
// window.SongStore = SongStore;

var App = React.createClass({

  getInitialState: function() {
    debugger;
    return ({
      user: UserStore.currentUser()
    });
  },

  checkForLogIn: function() {
    alert('this is a branch test');
    var user = this.state.user;
    if (user === null) {
      this.props.history.push('/session/new');
    } else {
      this.setState({ user: UserStore.currentUser() });
    }
  },

  _onChange: function() {
    if (!UserStore.loggedIn()) {
      this.props.history.push('/session/new');
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
      <div className="content">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

var appRoutes = (
  <Route path='/' component={App}>
    <IndexRoute component={LoggedInApp} />
    <Route path='/songs/new' component={SongForm} />
    <Route path='/session/new' component={LogIn} />
    <Route path='/users/:id' component={UserProfile} />
    <Route path='/songs/:id' component={SongProfile} />
  </Route>
);


// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");

  ReactDOM.render(<Router>{appRoutes}</Router>, root);

});
