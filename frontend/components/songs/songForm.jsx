var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongUtil = require('../../util/songUtil');
var UserStore = require('../../stores/userStore');
var History = require('react-router').History;


var SongForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    artist: '',
    album: ''
  },

  getInitialState: function() {
    return ({
      blankAttrs: this.blankAttrs,
      audioUploaded: false,
      audioUrl: ''
    });
  },

  audioUpload: function() {
    var options = {
      cloud_name: "dzyfczxnr",
      upload_preset: "paygr4uo"
    };
    var callback = this.uploadResult;
    cloudinary.openUploadWidget(options, callback);
    this.setState({audioUploaded: true});
  },

  uploadResult: function(error, results) {
    var url = results[0].url;
    this.state.audioUrl = url;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var song = { song: {
      title: this.state.title,
      artist_name: this.state.artist,
      audio_url: this.state.audioUrl,
      album_id: Number(this.state.album),
      user_id: UserStore.currentUser().id
    }}
    SongUtil.createSong(song);
    this.props.history.push('/');
  },

  render: function() {
    return (
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
    );
  }
});

module.exports = SongForm;
