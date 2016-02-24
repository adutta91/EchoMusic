var React = require('react');
var History = require('react-router').History;

var ProfileButton = React.createClass({

  mixins: [History],

  handleSubmit: function() {
    debugger;
    this.history.push('/api/users/:id');
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
