var React = require('react');
var History = require('react-router').History;
var UserStore = require('../../stores/userStore');

var ProfileButton = React.createClass({

  mixins: [History],

  _onClick: function(event) {
    event.preventDefault();
    this.history.push('/users/' + UserStore.currentUser().id);
  },

  render: function() {
    return (
      <input className="profileButton" type="submit" value="Profile" onClick={this._onClick}>Profile</input>
    );
  }
});

module.exports = ProfileButton;
