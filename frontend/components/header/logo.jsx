
var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORE
var SessionStore = require('../../stores/SessionStore');

// CLASS DEFINITION ----------------------------------------***
var Logo = React.createClass({

  _onClick: function(event) {
    event.preventDefault();
    if(SessionStore.loggedIn()) {
      hashHistory.push('/');
    } else {
      hashHistory.push('/session/new');
    }
  },

  render: function() {
    return (
      <div className="logoWrapper">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1457299551/soundwave_k4gfjc.png"
             className="logo"
             onClick={this._onClick} />
      </div>
    );
  }

});

module.exports = Logo;
