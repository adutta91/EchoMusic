var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _songs = [];
var SongStore = new Store(Dispatcher);

SongStore.all = function() {
  return _songs.slice();
};

SongStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'ADD_SONG':
      addSong(payload.song);
      SongStore.__emitChange();
      break;
    case 'RECEIVE_SONGS':
      resetSongs(payload.songs);
      SongStore.__emitChange();
      break;
  }
};

var resetSongs = function(songs) {
  _songs = songs
};

var addSong = function(song) {
  _songs.push(song);
};

module.exports = SongStore;
