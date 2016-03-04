// lyric store
//    purpose: store relevant data on lyrics

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _lyrics = [];

var LyricsStore = new Store(Dispatcher);

LyricStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_LYRICS':
      resetLyrics(payload.lyrics);
      LyricsStore.__emitChange();
      break;
  }
};

var resetLyrics = function(lyrics) {
  _lyrics = lyrics;
};

module.exports = LyricsStore;
