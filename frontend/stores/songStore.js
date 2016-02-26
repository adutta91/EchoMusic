var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _songs = {};
var _currentSong;
var SongStore = new Store(Dispatcher);

SongStore.all = function() {
  var songs = []
  Object.keys(_songs).forEach(function(songId){
    songs.push(_songs[songId]);
  });
  return songs;
};

SongStore.find = function(songId) {
  return _songs[songId];
};

SongStore.currentSong = function() {
  if (currentSong) {
    return _currentSong;
  } else {
    return null;
  }
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
    case 'PLAY_SONG':
      alert('songPlaying');
      SongStore.__emitChange();
      break;
  }
};

var resetSongs = function(songs) {

  _songs = {};
  songs.forEach(function(song) {
    _songs[song.id] = song;
  });

};

var addSong = function(song) {
  _songs[song.id] = song;
};

module.exports = SongStore;
