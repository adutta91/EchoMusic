// lyric util
//    purpose: action requests regarding lyrics

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var LyricActions = require('../actions/lyricActions');

var LyricUtil = {
  fetchLyrics: function(title, artist) {
    var url = (
      "//api.musixmatch.com/ws/1.1/track.search?q_track=" +
      encodeURIComponent(title) + "&q_artist=" + encodeURIComponent(artist) +
      "&f_has_lyrics=1&apikey=" + window.musixMatchKey
    );

    $.ajax({
      url: url,
      dataType: 'JSONP',
      jsonpCallback: 'myCallback',
      error: function(response) {
        debugger;
      }
    });
    var myCallback = function(response) {
      debugger;
    };
  }
};

module.exports = LyricUtil;
