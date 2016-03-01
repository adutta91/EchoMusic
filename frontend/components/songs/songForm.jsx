var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongUtil = require('../../util/songUtil');
var SessionStore = require('../../stores/SessionStore');
var SessionStore = require('../../stores/SessionStore');
var SongStore = require('../../stores/songStore');
var ApiUtil = require('../../util/apiUtil');


var SongForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      audioUploaded: false,
      audioUrl: '',
      public_id: ''
    });
  },

  audioUpload: function() {
    var callback = this.uploadResult;

    cloudinary.openUploadWidget(window.cloudinaryOptions, callback);
    this.setState({audioUploaded: true});
  },

  uploadResult: function(error, results) {
    this.state.audioUrl = results[0].url;
    this.state.public_id = results[0].public_id
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var song = { song: {
      title: this.state.title,
      artist_name: this.state.artist,
      audio_url: this.state.audioUrl,
      album_id: Number(this.state.album),
      user_id: SessionStore.currentUser().id,
      public_id: this.state.public_id
    }}
    ApiUtil.createSong(song);
    this.context.router.push('/users/' + SessionStore.currentUser().id);
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

        {this.state.audioUploaded ? <div className="audioChecked">Uploaded!</div> : <button className="audioUploadButton" onClick={this.audioUpload}>Choose a File!</button>}

        <input className="uploadFormButton" type="submit" value="Upload!"/>

      </form>
      </div>
    );
  }
});

module.exports = SongForm;
