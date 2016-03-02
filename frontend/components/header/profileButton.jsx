// profile button react component
//    purpose: redirect to the user profile page
//
//    children: None

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTIL
var SessionUtil = require('../../util/sessionUtil');

// CLASS DEFINITION ----------------------------------------***
var ProfileButton = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _onClick: function(event) {
    event.preventDefault();
    SessionUtil.refreshSession(SessionStore.currentUser());
    this.context.router.push('/users/' + SessionStore.currentUser().id);
  },

  findImage: function() {
    var imageUrl = 'http://res.cloudinary.com/dzyfczxnr/image/upload/v1456856776/ProfileImage.png';
    if (SessionStore.currentUser().image_url) {
      imageUrl = SessionStore.currentUser().image_url;
    }
    return imageUrl;
  },

  render: function() {
    return (
      <img src={this.findImage()} className="profileButton" onClick={this._onClick} />
    );
  }
});

module.exports = ProfileButton;
