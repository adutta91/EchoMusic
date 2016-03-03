
var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORE
var SessionStore = require('../../stores/SessionStore');

// CLASS DEFINITION ----------------------------------------***
var Logo = React.createClass({

  _onClick: function(event) {
    if(SessionStore.loggedIn()) {
      this.context.router.push('/');
    } else {
      hashHistory.push('/session/new');
    }
  },

  render: function() {
    return (
      <div className="logo" onClick={this._onClick} />
    );
  }

});

module.exports = Logo;
