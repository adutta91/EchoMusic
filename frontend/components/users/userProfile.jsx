var React = require('react');

var SessionStore = require('../../stores/SessionStore');

var UserProfile = React.createClass({
  getInitialState: function() {
    return ({
      user: {
        username: "",
        id: ""
      }
    })
  },

  componentDidMount: function() {
    this.setState({ user: SessionStore.currentUser() })
  },

  render: function() {
    return (
      <div id="userProfile">Hello, &nbsp; {this.state.user.username}</div>
    )
  }
});

module.exports = UserProfile;
