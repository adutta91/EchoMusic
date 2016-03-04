// api Util
//    purpose: handle all server requests, call appropriate actions if
//             successful to represent changes on the frontend

var React = require('react');

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var SongActions = require('../actions/songActions');

// UTILS
var SongUtil = require('./songUtil');


var ApiUtil = {
  createSongFollow: function(songFollow) {
    $.ajax({
      url: 'api/song_follows',
      method: 'POST',
      data: songFollow,
      success: function(songFollow) {
        SongUtil.fetchFollowedSongs(songFollow.user_id);
      }.bind(this)
    });
  },

  deleteSongFollow: function(songFollow) {
    $.ajax({
      url: 'api/song_follows',
      method: 'PATCH',
      data: songFollow,
      success: function(songFollow) {
        SongUtil.fetchFollowedSongs(songFollow.user_id);
      }.bind(this)
    });
  }

}

module.exports = ApiUtil;
