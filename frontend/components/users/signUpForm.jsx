var React = require('react');

var UserUtil = require('../../util/userUtil');
var History = require('react-router').History;

var SignUpForm = React.createClass({
  mixins: [History],

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
    UserUtil.createUser(user);
    this.props.history.push('/');
  },

  render: function() {
    return (
      <form className="signForm" onSubmit={this.handleSubmit}>
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
