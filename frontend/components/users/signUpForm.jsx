var React = require('react');

var UserUtil = require('../../util/userUtil');

var SignUpForm = React.createClass({

  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleUsernameChange: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange: function(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function(event) {
    var user = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    UserUtil.createUser(user);
  },

  render: function() {
    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
        <label className="formLabel" htmlFor="username">Username: </label>
        <br/>
        <input
          className="input"
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          id="username" />
        <br/>

        <label className="formLabel" htmlFor="password">Password: </label>
        <br/>
        <input
          className="input"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
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
