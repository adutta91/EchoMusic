// edit user profile component
//    purpose: receive info to update user profile
//
//    children: none
//    actions: receive data for profile update
//    info: current values for relevant fields

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
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
