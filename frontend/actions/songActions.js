// functions for all song actions
//    purpose: dispatch actions to SongStore

var Dispatcher = require('../dispatcher');

SongActions = {
  uploadSong: function(song) {
    Dispatcher.dispatch({
      actionType: 'ADD_SONG',
      song: song
    });
  },

  receiveSongs: function(songs) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_SONGS',
      songs: songs
    });
  },

  receiveFollowedSongs: function(songs) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_FOLLOWED_SONGS',
      songs: songs
    });
  },

  receiveSingleSong: function(song) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_SONG',
      song: song
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
