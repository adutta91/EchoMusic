var Dispatcher = require('../dispatcher');

SongActions = {
  uploadSong: function(song) {
    Dispatcher.dispatch({
      actionType: 'ADD_SONG',
      user: song
    });
  },

  receiveAll: function(songs) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_SONGS',
      songs: songs
    });
  }

};

module.exports = SongActions;
