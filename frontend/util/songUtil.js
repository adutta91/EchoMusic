var SongActions = require('../actions/songActions');

SongUtil = {

  playSong: function(songId) {
    SongActions.playSong(songId);
  },

  pauseSong: function() {
    SongActions.pauseSong();
  },

  endSong: function() {
    debugger;
    SongActions.endSong();
  }
}

module.exports = SongUtil;
