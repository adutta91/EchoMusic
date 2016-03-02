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

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // getInitialState: function() {
  //   return ({
  //     userId: this.props.userId
  //   })
  // },

  // _onChange: function() {
  //   // console.log('store changed');
  // },

  _onClick: function() {
    this.context.router.push('/users/' + this.state.userId);
  },

  componentDidMount: function() {
    debugger;
    UserUtil.fetchSingleUser(this.props.userId);
    // this.userListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    // this.userListener.remove();
  },

  findUsername: function() {
    var user = UserStore.find(this.props.userId);
    if (user) {
      return user.username
    } else {
      return ""
    }
  },

  render: function() {
    return (
      <div className="userDisplay" onClick={this._onClick}>
        <div>{this.findUsername()}</div>
      </div>
    )
  }
});

module.exports = UserDisplay;
