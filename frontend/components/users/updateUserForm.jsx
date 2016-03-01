var React = require('react');

var LinkedStateMixin = require('react-addons-linked-state-mixin');


var SessionStore = require('../../stores/SessionStore');

var UpdateUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: SessionStore.currentUser().username
    });
  },

  render: function() {
    return (
      <form className="updateUserForm">
        <h2>I am a user form. Fear me.</h2>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" valueLink={this.linkState("username")} />

      </form>
    )
  }
});

module.exports = UpdateUserForm;
