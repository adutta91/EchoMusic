// song form component
//    purpose: to receive data to create a new song
//
//    children: none
//    actions: receive relevant data (eventually modal)
//    info: none

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var SessionStore = require('../../stores/SessionStore');
var ArtistStore = require('../../stores/artistStore');

// UTILS
var SongUtil = require('../../util/songUtil');
var ArtistUtil = require('../../util/artistUtil');

// MIXINS
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// CLASS DEFINITION ----------------------------------------***
var SongForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      audioUploaded: false,
      audioUrl: '',
    });
  },

  componentDidMount: function() {
    ArtistUtil.fetchAllArtists();
  },

  audioUpload: function() {
    cloudinary.openUploadWidget(window.cloudinaryOptions, this.uploadResult);
    this.setState( { audioUploaded: true } );
  },

  uploadResult: function(error, results) {
    this.state.audioUrl = results[0].url;
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var artistId = this.findArtist();

    var song = { song: {
      title: this.state.title,
      artist_name: this.state.artist,
      audio_url: this.state.audioUrl,
      album_id: this.state.album,
      user_id: SessionStore.currentUser().id,
      artist_id: artistId
    }};

    SongUtil.createSong(song);
    // this.context.router.push('/users/' + SessionStore.currentUser().id);
  },

  findArtist: function() {
    var result;
    var artistName = this.state.artist
    var artist = ArtistStore.findByName(artistName);
    if (artist) {
      result = artist.id;
    } else if (artistName === "") {
      result = 0;
    } else {
      // TODO: create artist, which then updates the song...
      ArtistUtil.createArtist(
        {
          artist: {
            name: artistName
          }
        }
      );
      result = 0;
    }
    return result;
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
      <form className="songForm" onSubmit={this.handleSubmit}>
        <h2 className="aboutHeader">Upload a Song!</h2>

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
    );
  }
});

module.exports = SongForm;
