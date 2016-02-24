var React = require('react');

var Logout = require('../users/logout');

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">
        <Logout />
      </div>
    )
  }
});

module.exports = Header;
