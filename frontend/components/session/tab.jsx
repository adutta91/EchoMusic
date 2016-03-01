// tab component
//    purpose: to display the proper session form (eventually modal)
//
//    children: none
//    actions: call a callback when clicked
//    info: type of session form (sign in or sign up)


var React = require('react');

// CLASS DEFINITION ----------------------------------------***
var Tab = React.createClass({
  getInitialState: function() {
    return ({
      type: this.props.type
    });
  },

  render: function() {
    return (
      <div className={this.props.className} onClick={this.props.tabCallback}>
        {this.state.type}
      </div>
    );
  }
});

module.exports = Tab;
