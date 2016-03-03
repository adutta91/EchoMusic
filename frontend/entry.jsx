// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

// ROUTER
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// STORES
var SessionStore = require('./stores/SessionStore');
var SongStore = require('./stores/songStore');

// UTILS
var SessionUtil = require('./util/sessionUtil');

// REACT COMPONENTS
var UserProfile = require('./components/users/userProfile');
var SongProfile = require('./components/songs/songProfile');
var ArtistProfile = require('./components/artists/artistProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/session/logIn');
var LoggedInApp = require('./components/app/app');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');

// CLASS DEFINITION ----------------------------------------***
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

// ROUTES DEFINITION ----------------------------------------***
var appRoutes = (
  <Route path='/' component={App}>
    <IndexRoute component={LoggedInApp} />
    <Route path='/songs/new' component={SongForm} />
    <Route path='/session/new' component={LogIn} />
    <Route path='/users/:id' component={UserProfile} />
    <Route path='/songs/:id' component={SongProfile} />
    <Route path='/artists/:id' component={ArtistProfile} />
  </Route>
);


// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  Modal.setAppElement('#root');

  ReactDOM.render(<Router history={hashHistory}>{appRoutes}</Router>, root);

});
