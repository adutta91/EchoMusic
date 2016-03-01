var React = require('react');
var ApiUtil = require('../../util/apiUtil');


var SignInForm = React.createClass({

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
          value={this.state.username}
          onChange={this.handleUsernameChange}
          id="username" />
        <br/>

        <label htmlFor="password" className="formLabel">Password: </label>
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
          value="Sign In!" />

      </form>
    )
  }
});

module.exports = SignInForm;
