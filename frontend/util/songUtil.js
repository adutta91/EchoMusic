var SongActions = require('../actions/songActions');

SongUtil = {

  fetchSongs: function() {
    $.get('api/songs', {}, function(songs) {
      SongActions.receiveAll(songs);
    });
  },

  fetchSingleSong: function() {
    $.ajax({

    });
  },

  createSong: function(song) {
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      data: song,
      success: function(song) {
        SongActions.uploadSong(song);
      },
      error: function(song) {
        // TODO: errors
        alert('ya done goofed');
      }
    });
  }
}

module.exports = SongUtil;
