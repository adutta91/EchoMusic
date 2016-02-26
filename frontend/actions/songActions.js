var Dispatcher = require('../dispatcher');

SongActions = {
  uploadSong: function(song) {
    Dispatcher.dispatch({
      actionType: 'ADD_SONG',
      song: song
    });
  },

  receiveAll: function(songs) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_SONGS',
      songs: songs
    });
  },

  playSong: function(songId) {
    Dispatcher.dispatch({
      actionType: 'PLAY_SONG',
      songId: songId
    });
  },

  pauseSong: function() {
    Dispatcher.dispatch({
      actionType: 'PAUSE_SONG'
    });
  },

  endSong: function() {
    Dispatcher.dispatch({
      actionType: 'END_SONG'
    });
  }

};

module.exports = SongActions;
