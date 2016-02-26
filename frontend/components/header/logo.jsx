var React = require('react');
var History = require('react-router').History;
var UserStore = require('../../stores/userStore');

var Logo = React.createClass({
  mixins: [History],

  _onClick: function(event) {
    if(UserStore.loggedIn()) {
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
