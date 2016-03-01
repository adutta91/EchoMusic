var React = require('react');

var LinkedStateMixin = require('react-addons-linked-state-mixin');


var SessionStore = require('../../stores/SessionStore');

var UpdateUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: SessionStore.currentUser()
    });
  },

  blankAttrs: {
    username: this.state.user.username,
    id: this.state.user.id
  },

  render: function() {
    return (
      <form className="updateUserForm">
        <h2>I am a user form. Fear me.</h2>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" valueLink={this.linkState("username")} />

        <label htmlFor="id">Id</label>
        <input id="id" type="text" value={this.state.user.id} />
      </form>
    )
  }
});

module.exports = UpdateUserForm;
