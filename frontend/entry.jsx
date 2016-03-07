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
var Modal = require('react-modal');
var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.6)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'column',
    background                 : 'linear-gradient(to bottom right, #592000, #FF5B00)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    border                     : '3px solid black',
    outline                    : 'none',
    marginTop                  : '50px',
    height: '200px',
    width: '500px'
  }
};


// CLASS DEFINITION ----------------------------------------***
var App = React.createClass({

  getInitialState: function() {
    return ({
      user: SessionStore.currentUser(),
      modalOpen: false
    });
  },

  openModal: function() {
    this.setState({modalOpen: true});
  },

  closeModal: function() {
    this.setState({modalOpen: false });
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
      this.openModal();
    } else {
      this.checkForLogIn();
    }
  },

  componentWillUnmount: function() {
    this.errorListener.remove();
  },

  handleError: function() {
    this.openModal();
  },

  render: function() {
    return (
      <div className="content">
        <Header />
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>
          <ErrorDisplay errors={ErrorStore.all()}/>
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
  Modal.setAppElement('#root');

  ReactDOM.render(<Router history={hashHistory}>{appRoutes}</Router>, root);

});
