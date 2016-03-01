// sign-in form component
//    purpose: receive data from the user and start a login request
//
//    children: none
//    actions: receive data to send to server
//    info: none


var React = require('react');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
var SignInForm = React.createClass({
  
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
    ApiUtil.createSession(user);
  },

  render: function() {
    return (
      <form className="signForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="formLabel">Username: </label>
        <br/>
        <input
          className="input"
          type="text"
          valueLink={this.linkState("username")}
          id="username" />
        <br/>

        <label htmlFor="password" className="formLabel">Password: </label>
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
          value="Sign In!" />

      </form>
    )
  }
});

module.exports = SignInForm;
