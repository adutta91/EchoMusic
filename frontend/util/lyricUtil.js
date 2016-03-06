// lyric util
//    purpose: action requests regarding lyrics

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var LyricActions = require('../actions/lyricActions');

var LyricUtil = {
  fetchLyrics: function() {
    $.ajax({
      url: "",
      method: "GET",
      success: function(response) {
        debugger;
      },
      error: function(error) {
        debugger;
      }
    });
  }
};

module.exports = LyricUtil;
