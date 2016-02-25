var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongUtil = require('../../util/songUtil');
var UserStore = require('../../stores/userStore');
var History = require('react-router').History;


var SongForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    desc: '',
    filename: '',
    artist: '',
    album: ''
  },

  getInitialState: function() {
    return (this.blankAttrs);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var song = { song: {
      title: this.state.title,
      description: this.state.desc,
      filename: this.state.filename,
      artist_id: Number(this.state.artist),
      album_id: Number(this.state.album)
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

        <label htmlFor="desc" className="songDescForm">Description: </label>
        <br/>
        <input type="text"
               id="desc"
               valueLink={this.linkState("desc")}/>
        <br/>

        <label htmlFor="filename" className="songFileForm">Filename: </label>
        <br/>
        <input type="text"
               id="filename"
               valueLink={this.linkState("filename")}/>
        <br/>

        <label htmlFor="artist_id" className="songArtistForm">Artist: </label>
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

        <input className="uploadButton" type="submit" value="Upload!"/>

      </form>
    );
  }
});

module.exports = SongForm;
