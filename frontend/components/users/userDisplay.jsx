// user display component
//    purpose: display info on a specific user
//
//    children: none
//    actions: redirect to user page on click
//    info: user info

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var UserStore = require('../../stores/userStore');

// UTILS
var UserUtil = require('../../util/userUtil');

// CLASS DEFINITION ----------------------------------------***
var UserDisplay = React.createClass({

  getInitialState: function() {
    return ({
      userId: this.props.userId,
      user: {}
    })
  },

  _onChange: function() {
    this.setState({user: UserStore.find(this.state.userId)})
  },

  _onClick: function() {
    hashHistory.push('/users/' + this.state.userId);
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    UserUtil.fetchSingleUser(newProps.userId);
    this.setState({userId: newProps.userId});
  },

  findUsername: function() {
    var user = UserStore.find(this.state.userId);

    if (user) {
      return user.username
    } else {
      return ""
    }
  },

  render: function() {
    return (
      <div className="userDisplay">
        <div>submitted by {this.findUsername()}</div>
      </div>
    )
  }
});

module.exports = UserDisplay;
