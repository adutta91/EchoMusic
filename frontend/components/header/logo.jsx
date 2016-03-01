var React = require('react');

// STORE
var SessionStore = require('../../stores/SessionStore');

// CLASS DEFINITION ----------------------------------------***
var Logo = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _onClick: function(event) {
    if(SessionStore.loggedIn()) {
      this.context.router.push('/');
    } else {
      this.context.router.push('/session/new');
    }
  },

  render: function() {
    return (
      <div className="logo" onClick={this._onClick} />
    );
  }

});

module.exports = Logo;
