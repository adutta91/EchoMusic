var React = require('react');

var UserForm = React.createClass({
  getInitialState: function() {
    return({
      username: "",
      password: ""
    })
  },

  handleUsernameChange: function(event) {
    this.setState({username: event.target.value})
  },

  handlePasswordChange: function(event) {
    this.setState({password: event.target.value})
  },

  handleSubmit: function(event) {
    
  },

  render: function() {
    return (
      <form className='userForm' onSubmit={this.handleSubmit}>

        <label htmlFor="username">Username: </label>
        <input
          className="userInputForm"
          type="text"
          value={this.state.value}
          onChange={this.handleUsernameChange}
          id="username"/>
        <br/>

        <label htmlFor="password">Password: </label>
        <input
          className="userInputForm"
          type="password"
          value={this.state.value}
          onChange={this.handlePasswordChange}
          id="password"/>
        <br/>

        <input className="submitButton" type="submit" value="Log In" />
      </form>
    )
  }
});

module.exports = UserForm;
