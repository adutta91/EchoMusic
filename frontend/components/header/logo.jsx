var React = require('react');
var SessionStore = require('../../stores/SessionStore');

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
      <div className="logo" onClick={this._onClick}></div>
    );
  }

});

module.exports = Logo;
