var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongUtil = require('../../util/songUtil');


var SongForm = React.createClass({
  mixins: [LinkedStateMixin],

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

  handleSubmit: function() {
    var song = { song: {
      title: this.state.title,
      description: this.state.desc,
      filename: this.state.filename,
      artist_id: Number(this.state.artist),
      album_id: Number(this.state.album)
    }}
    SongUtil.createSong(song);
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
