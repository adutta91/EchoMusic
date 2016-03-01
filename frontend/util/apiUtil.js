// api Util
//    purpose: handle all server requests, call appropriate actions if
//             successful to represent changes on the frontend

var React = require('react');

// ACTIONS
var SongActions = require('../actions/songActions');
var SessionActions = require('../actions/sessionActions');

// UTILS
var SessionUtil = require('./sessionUtil');


var ApiUtil = {

  // USER QUERIES ---------------------------------------------*****
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.logInUser(user);
        window.location = '/';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('create user error');
      }
    })
  },

  updateUser: function(user) {
    $.ajax({
      url: 'api/users/' + user.user.id,
      method: 'PATCH',
      data: user,
      success: function(user) {
        SessionUtil.refreshSession(user);
      },
      error: function(user) {
        alert('user update error');
      }
    })
  },

  createSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.logInUser(user);
        window.location = '/';
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('create session error');
      }
    });
  },

  resetSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: {id: user.id},
      success: function(user) {
        SessionActions.logOutUser();
      }
    });
  },

  // SONG QUERIES ---------------------------------------------*****
  createSong: function(song) {
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      data: song,
      success: function(song) {
        SongActions.uploadSong(song);
      },
      error: function(song, error) {
        alert("create song error");
      }
    });
  },

  fetchExploreSongs: function() {
    data = {submitted: false};
    $.ajax({
      url: 'api/songs',
      method: 'GET',
      data: data,
      success: function(songs) {
        SongActions.receiveSongs(songs);
      }
    });
  },

  fetchUserSongs: function(userId) {
    data = {userId: userId, submitted: true};
    $.ajax({
      url: 'api/songs',
      method: 'GET',
      data: data,
      success: function(songs) {
        SongActions.receiveSongs(songs);
      }
    })
  },

  fetchSingleSong: function(id) {
    $.get('api/songs/' + id, {}, function(song) {
      SongActions.receiveSingleSong(song);
    });
  }

}

module.exports = ApiUtil;
