// sign up form component
//    purpose: receive data to create a new user and session
//
//    children: none
//    actions: receive data to send to server
//    info: none

var React = require('react');

// UTILS
var SessionUtil = require('../../util/sessionUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');


// CLASS DEFINITION ----------------------------------------***
var SignUpForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    SessionUtil.createUser(user);
  },

  render: function() {
    return (
      <form className="signForm" onSubmit={this.handleSubmit}>
        <label className="formLabel" htmlFor="username">Username: </label>
        <br/>
        <input
          className="input"
          type="text"
          valueLink={this.linkState("username")}
          id="username" />
        <br/>

        <label className="formLabel" htmlFor="password">Password: </label>
        <br/>
        <input
          className="input"
          type="password"
          valueLink={this.linkState("password")}
          id="password" />
        <br/>

        <input
          className="submitButton"
          type="submit"
          value="Sign Up!" />
      </form>
    )
  }
});

module.exports = SignUpForm;
