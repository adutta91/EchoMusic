// lyric util
//    purpose: action requests regarding lyrics

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var LyricActions = require('../actions/lyricActions');

var LyricUtil = {
  fetchLyrics: function() {
    $.ajax({
      url: "http://api.cajunlyrics.com/LyricDirectSearch.php?artist=Blind+Pilot&title=Pilot",
      method: "GET",
      success: function(response) {
        debugger;
      },
      error: function(response) {
        debugger;
      }
    });
  }
};

module.exports = LyricUtil;
