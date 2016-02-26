var React = require('react');

var UserStore = require('../../stores/userStore');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div id="userProfile">{UserStore.currentUser().username}</div>
    )
  }
});

module.exports = UserProfile;
