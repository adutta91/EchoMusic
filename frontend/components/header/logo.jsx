var React = require('react');
var History = require('react-router').History;
var SessionStore = require('../../stores/sessionStore');

var Logo = React.createClass({
  mixins: [History],

  _onClick: function(event) {
    if(SessionStore.loggedIn()) {
      this.history.push('/');
    } else {
      this.history.push('/session/new');
    }
  },

  render: function() {
    return (
      <div className="logo" onClick={this._onClick}></div>
    );
  }

});

module.exports = Logo;
