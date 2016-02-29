var React = require('react');
var History = require('react-router').History;
var SessionStore = require('../../stores/sessionStore');

var ProfileButton = React.createClass({

  mixins: [History],

  _onClick: function(event) {
    event.preventDefault();
    this.history.push('/users/' + SessionStore.currentUser().id);
  },

  render: function() {
    return (
      <input className="profileButton" type="submit" value="Profile" onClick={this._onClick}>Profile</input>
    );
  }
});

module.exports = ProfileButton;
