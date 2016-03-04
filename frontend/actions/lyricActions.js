// functions for all lyric actions
//    purpose: dispatch lyric to LyricStore

var Dispatcher = require('../dispatcher');

var LyricActions = {
  receiveLyrics: function(lyrics) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_LYRICS',
      lyrics: lyrics
    });
  }
};

module.exports = LyricActions;
