// edit user profile component
//    purpose: receive info to update user profile
//
//    children: none
//    actions: receive data for profile update
//    info: current values for relevant fields

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTILS
var SessionUtil = require('../../util/sessionUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
var UpdateUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: SessionStore.currentUser().username,
      desc: SessionStore.currentUser().description,
      imageUrl: SessionStore.currentUser().image_url,
      imageUploaded: false
    });
  },

  imageUpload: function() {
    var callback = this.uploadResult;

    cloudinary.openUploadWidget(window.cloudinaryOptions, callback);
  },

  uploadResult: function(error, results) {
    if (results) {
      this.state.imageUrl = results[0].url;
      this.setState( { imageUploaded: true } );
    }
  },

  uploadDisplay: function() {
    var display = <div className="imageChecked">Uploaded!</div>
    if (!this.state.imageUploaded) {
      display = (
        <button className="imageUploadButton" onClick={this.imageUpload}>
          Choose a File!
        </button>
      );
    }
    return display;
  },

  handleSubmit: function() {
    event.preventDefault();

    var user = {user: {
      id: SessionStore.currentUser().id,
      username: this.state.username,
      description: this.state.desc,
      image_url: this.state.imageUrl
    }};
    SessionUtil.updateUser(user);
    this.props.modalCallback();
    hashHistory.push('/users/' + SessionStore.currentUser().id);
  },

  render: function() {
    return (
      <form className="updateUserForm" onSubmit={this.handleSubmit}>
        <h2>Update your info!</h2>

        <label htmlFor="username">Username</label>
        <input id="username" type="text" valueLink={this.linkState("username")} />

        <label htmlFor="desc">About</label>
        <textarea id="desc" wrap='hard' cols='6' rows='1' valueLink={this.linkState("desc")}>{this.state.desc}</textarea>

        {this.uploadDisplay()}

        <input className="updateFormButton" type="submit" value="Update!"/>

      </form>
    )
  }
});

module.exports = UpdateUserForm;
