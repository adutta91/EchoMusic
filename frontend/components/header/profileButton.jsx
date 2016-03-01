// profile button react component
//    purpose: redirect to the user profile page
//
//    children: None

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// CLASS DEFINITION ----------------------------------------***
var ProfileButton = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _onClick: function(event) {
    event.preventDefault();
    this.context.router.push('/users/' + SessionStore.currentUser().id);
  },

  render: function() {
    return (
      <button className="profileButton" onClick={this._onClick}>Profile</button>
    );
  }
});

module.exports = ProfileButton;
