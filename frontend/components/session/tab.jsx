var React = require('react');

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
