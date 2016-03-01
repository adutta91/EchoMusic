// React requires
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var hashHistory = ReactRouter.hashHistory;

// stores
var SessionStore = require('./stores/SessionStore');
var SongStore = require('./stores/songStore');

var SessionUtil = require('./util/sessionUtil');

// React components
var UserProfile = require('./components/users/userProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/session/logIn');
var LoggedInApp = require('./components/app/app');
var Header = require('./components/header/header');
var SongProfile = require('./components/songs/songProfile');
var Footer = require('./components/footer/footer');


var App = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      user: SessionStore.currentUser()
    });
  },

  checkForLogIn: function() {
    var user = localStorage.getItem('loggedInUser')
    if (user === null) {
      this.context.router.push('/session/new');
    } else {
      user = JSON.parse(user);
      SessionUtil.refreshSession(user);
    }
  },

  componentDidMount: function() {
    this.checkForLogIn();
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
  Modal.setAppElement('#root');

  ReactDOM.render(<Router>{appRoutes}</Router>, root);

});
