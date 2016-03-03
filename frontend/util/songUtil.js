// song Util
//    purpose: all non-server action requests regarding songs

// ACTIONS
var SongActions = require('../actions/songActions');

SongUtil = {

  loadSong: function(songId) {
    SongActions.loadSong(songId);
  },

  pauseSong: function() {
    SongActions.pauseSong();
  },

  endSong: function() {
    SongActions.endSong();
  },

  playSong: function() {
    SongActions.playSong();
  },
}

module.exports = SongUtil;
