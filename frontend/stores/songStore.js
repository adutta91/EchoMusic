var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _songs = {};
var _currentSong = null;
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
  if (_currentSong) {
    return _currentSong;
  } else {
    return null;
  }
};

SongStore.setCurrentSong = function(songId) {
  _currentSong = _songs[songId];
};

SongStore.endCurrentSong = function() {
  _currentSong = null;

};

SongStore.playing = function() {
  if (_currentSong === null) {
    return false;
  } else {
    return true;
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
      SongStore.setCurrentSong(payload.songId);
      SongStore.__emitChange();
      break;
    case 'END_SONG':
      SongStore.endCurrentSong();
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
