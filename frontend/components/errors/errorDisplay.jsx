// edit user profile component
//    purpose: receive info to update user profile
//
//    children: none
//    actions: receive data for profile update
//    info: current values for relevant fields

var React = require('react');

// CLASS DEFINITION ----------------------------------------***
var ErrorDisplay = React.createClass({

  getInitialState: function() {
    return ({
      errors: this.props.errors
    })
  },

  listErrors: function() {
    return this.state.errors.map(function(error, idx) {
      return (<li className="error" key={idx}>{error}</li>)
    });
  },

  render: function() {
    return (
      <ul className="errorList"> {this.listErrors()} </ul>
    );
  }
});

module.exports = ErrorDisplay;
