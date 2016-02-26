var React = require('react');
var History = require('react-router').History;
var UserStore = require('../../stores/userStore');

var ProfileButton = React.createClass({

  mixins: [History],

  handleSubmit: function() {
    this.history.push('/users/' + UserStore.currentUser.id);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button className="profileButton" type="submit" value="Profile" />
      </form>
    );
  }
});

module.exports = ProfileButton;
