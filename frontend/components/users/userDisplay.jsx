// user display component
//    purpose: display info on a specific user
//
//    children: none
//    actions: redirect to user page on click
//    info: user info

var React = require('react');

// STORES
var UserStore = require('../../stores/userStore');

// UTILS
var UserUtil = require('../../util/userUtil');

// CLASS DEFINITION ----------------------------------------***
var UserDisplay = React.createClass({

  getInitialState: function() {
    return ({
      user: this.props.user
    })
  },

  _onChange: function() {
    console.log('userStore changed');
  },

  componentDidMount: function() {
    // this.userListener = UserStore.addListener(this._onChange);
    UserUtil.fetchSingleUser(this.state.user.id);
  },

  componentWillUnmount: function() {
    // this.userListener.remove();
  },

  render: function() {
    return (
      <div className="userDisplay">I am a user display</div>
    )
  }
});

module.exports = UserDisplay;
