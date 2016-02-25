var React = require('react');
var History = require('react-router').History;


var SignInForm = React.createClass({
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
    var user = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    UserUtil.createSession(user);
    this.props.history.push('/api/songs');
    debugger;
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
