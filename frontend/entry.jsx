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
var ErrorStore = require('./stores/errorStore');

// UTILS
var SessionUtil = require('./util/sessionUtil');
var ErrorUtil = require('./util/errorUtil');

// REACT COMPONENTS
var UserProfile = require('./components/users/userProfile');
var SongProfile = require('./components/songs/songProfile');
var ArtistProfile = require('./components/artists/artistProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/session/logIn');
var LoggedInApp = require('./components/app/app');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');
var ErrorDisplay = require('./components/errors/errorDisplay');

// MODAL DEPENDENCIES
var Modal = require('boron/OutlineModal');
var Modal2 = require('react-modal');

var contentStyle = {
  position                   : 'static',
  display                    : 'flex',
  justifyContent             : 'space-around',
  alignItems                 : 'center',
  flexDirection              : 'column',
  background                 : 'linear-gradient(to bottom right, #592000, #FF5B00)',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  borderRadius               : '5px',
  border                     : '3px solid black',
  outline                    : 'none',
  marginTop                  : '50px',
  height: '200px',
  width: '500px'
};

// CLASS DEFINITION ----------------------------------------***
var App = React.createClass({

  getInitialState: function() {
    return ({
      errors: ErrorStore.all()
    });
  },

  showModal: function() {
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide()
    ErrorStore.clear();
  },

  checkForLogIn: function() {
    var user = localStorage.getItem('loggedInUser')
    if (user === null) {
      hashHistory.push('/session/new');
    } else {
      user = JSON.parse(user);
      SessionUtil.refreshSession(user);
    }
  },

  componentDidMount: function() {
    this.errorListener = ErrorStore.addListener(this.handleError);

    if (ErrorStore.areErrors()) {
      this.showModal();
    } else {
      this.checkForLogIn();
    }
  },

  componentWillUnmount: function() {
    this.errorListener.remove();
  },

  handleError: function() {
    this.setState({errors: ErrorStore.all()})
    this.showModal();
  },

  render: function() {
    return (
      <div className="content">
        <Header />
        <Modal ref="modal" contentStyle={contentStyle}>
          <ErrorDisplay errors={this.state.errors}/>
          <button className="closeButton" onClick={this.hideModal}>Ok</button>
        </Modal>
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
  Modal2.setAppElement('#root');

  ReactDOM.render(<Router history={hashHistory}>{appRoutes}</Router>, root);

});
