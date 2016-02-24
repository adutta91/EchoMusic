var React = require('react');
var UserUtil = require('../../util/userUtil');

var Logout = React.createClass({

  handleSubmit: function() {
    UserUtil.resetSession();
  },

  render: function() {
    return (
      <form className="logoutButton" onSubmit={this.handleSubmit}>
        <input type="submit" value="Logout"/>
      </form>
    )
  }
});

module.exports = Logout;
