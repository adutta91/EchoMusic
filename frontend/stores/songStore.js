var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _songs = {};
var _currentSong = null;
var _playing = false;
var _audio = new Audio();
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

SongStore.endCurrentSong = function() {
  _currentSong = null;
  _audio.pause();
  _playing = false;
  _audio = new Audio;
};

SongStore.playing = function() {
  return _playing;
};

SongStore.setCurrentSong = function(songId) {
  _currentSong = _songs[songId];
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
    case 'RECEIVE_SONG':
      resetSong(payload.song);
      SongStore.__emitChange();
      break;
    case 'PLAY_SONG':
      if (_currentSong === null) {
        SongStore.setCurrentSong(payload.songId);
        playSong();
      } else if (Number(payload.songId) !== _currentSong.id) {
        SongStore.endCurrentSong();
        SongStore.setCurrentSong(payload.songId);
        playSong();
      } else {
        resumeSong();
      }
      SongStore.__emitChange();
      break;
    case 'PAUSE_SONG':
      pauseSong();
      SongStore.__emitChange();
      break;
    case 'END_SONG':
      endSong();
      SongStore.__emitChange();
      break;
  }
};

var playSong = function() {
  _audio.src = _currentSong.audio_url;

  _audio.addEventListener('canplay', function() {
    _audio.play();
    _playing = true;
  });

  _audio.addEventListener('ended', function() {
    SongUtil.endSong();
    _playing = false;
  });
};

var pauseSong = function() {
  _audio.pause();
  _playing = false;
};

var resumeSong = function() {
  _audio.play();
  _playing = true;
};

var endSong = function() {
  SongStore.endCurrentSong();
};

var resetSongs = function(songs) {
  newSongs = {};
  songs.forEach(function(song) {
    newSongs[song.id] = song;
  });
  _songs = newSongs
};

var resetSong = function(song) {
  _songs[song.id] = song;
}

var addSong = function(song) {
  _songs[song.id] = song;
};

module.exports = SongStore;
