// song form component
//    purpose: to receive data to create a new song
//
//    children: none
//    actions: receive relevant data (eventually modal)
//    info: none

var React = require('react');

// STORES
var SessionStore = require('../../stores/SessionStore');

// UTILS
var ApiUtil = require('../../util/apiUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
var SongForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      audioUploaded: false,
      audioUrl: '',
    });
  },

  audioUpload: function() {
    var callback = this.uploadResult;

    cloudinary.openUploadWidget(window.cloudinaryOptions, callback);
    this.setState( { audioUploaded: true } );
  },

  uploadResult: function(error, results) {
    this.state.audioUrl = results[0].url;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var song = { song: {
      title: this.state.title,
      artist_name: this.state.artist,
      audio_url: this.state.audioUrl,
      album_id: Number(this.state.album),
      user_id: SessionStore.currentUser().id
    }}
    ApiUtil.createSong(song);
    this.context.router.push('/users/' + SessionStore.currentUser().id);
  },

  uploadDisplay: function() {
    var display = <div className="audioChecked">Uploaded!</div>
    if (!this.state.audioUploaded) {
      display = (
        <button className="audioUploadButton" onClick={this.audioUpload}>
          Choose a File!
        </button>
      );
    }
    return display;
  },

  render: function() {
    return (
      <div className="songFormBanner">
      <form className="songForm" onSubmit={this.handleSubmit}>
        <label htmlFor="title" className="songTitleForm">Title: </label>
        <br/>
        <input type="text"
               id="title"
               valueLink={this.linkState("title")}/>
        <br/>

        <label htmlFor="artist_name" className="songArtistForm">Artist: </label>
        <br/>
        <input type="text"
               id="artist"
               valueLink={this.linkState("artist")}/>
        <br/>

        <label htmlFor="album_id" className="songAlbumForm">Album: </label>
        <br/>
        <input type="text"
               id="album"
               valueLink={this.linkState("album")}/>
        <br/>

        {this.uploadDisplay()}

        <input className="uploadFormButton" type="submit" value="Upload!"/>

      </form>
      </div>
    );
  }
});

module.exports = SongForm;
