var SongActions = require('../actions/songActions');

SongUtil = {

  fetchSongs: function() {
    $.get('api/songs', {}, function(songs) {
      SongActions.receiveAll(songs);
    });
  },

  createSong: function(song) {
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      data: song,
      success: function(song) {
        SongActions.uploadSong(song);
        window.location = '/';
      },
      error: function(song) {
        alert('ya done goofed');
      }
    })
  }
}

module.exports = SongUtil;
