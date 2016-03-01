// edit user profile component
//    purpose: receive info to update user profile
//
//    children: none
//    actions: receive data for profile update
//    info: current values for relevant fields

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
var UpdateUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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
    this.setState( { imageUploaded: true } );
  },

  uploadResult: function(error, results) {
    this.state.imageUrl = results[0].url;
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
    ApiUtil.updateUser(user);
    this.props.modalCallback();
    this.context.router.push('/users/' + SessionStore.currentUser().id);
  },

  render: function() {
    return (
      <form className="updateUserForm" onSubmit={this.handleSubmit}>
        <h2>I am a user form. Fear me.</h2>

        <label htmlFor="username">Username</label>
        <input id="username" type="text" valueLink={this.linkState("username")} />

        <label htmlFor="desc">About</label>
        <input id="desc" type="text" valueLink={this.linkState("desc")} />

        {this.uploadDisplay()}

        <input className="updateFormButton" type="submit" value="Update!"/>

      </form>
    )
  }
});

module.exports = UpdateUserForm;
