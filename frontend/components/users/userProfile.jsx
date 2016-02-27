var React = require('react');

var UserStore = require('../../stores/userStore');

var UserProfile = React.createClass({
  getInitialState: function() {
    return ({
      userId: this.props.params.id
    })
  },

  componentWillMount: function() {
    
  },

  render: function() {
    return (
      <div id="userProfile">{UserStore.currentUser().username}</div>
    )
  }
});

module.exports = UserProfile;
