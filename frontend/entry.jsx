// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// stores
var UserStore = require('./stores/userStore');

// React components
var UserProfile = require('./components/users/userProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/users/logIn');
var FullApp = require('./components/app/app');

var History = require('react-router').History;


var App = React.createClass({

  getInitialState: function() {
    return ({
      user: UserStore.currentUser()
    });
  },

  checkForLogIn: function() {
    var thing = UserStore.loggedIn();
    debugger;
    if (!UserStore.loggedIn()) {
      this.props.history.push('/api/session/new');
    } else {
      this.setState({ user: UserStore.currentUser() });
      this.props.history.push('/api/songs');
    }
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.checkForLogIn);
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
    <Route path='api/session/new' component={LogIn} />
    <Route path='api/songs' component={FullApp}>
      <Route path="/api/songs/new" component={SongForm}/>
    </Route>
    <Route path="api/users/:id" component={UserProfile}/>
  </Route>
);


// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");

  ReactDOM.render(<Router>{appRoutes}</Router>, root);

});
