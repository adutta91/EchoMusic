// api Util
//    purpose: handle all server requests, call appropriate actions if
//             successful to represent changes on the frontend

var React = require('react');

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

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
        SessionActions.showUser(user);
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
        hashHistory.push('/songs/'+ song.id);
      },
      error: function(error) {
        debugger;
        alert(error.responseText);
      }
    });
  },

  fetchExploreSongs: function() {
    data = { explore: true };
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
    data = {explore: false};
    $.ajax({
      url: 'api/songs',
      method: 'GET',
      data: data,
      success: function(songs) {
        SongActions.receiveSongs(songs);
      }
    })
  },

  fetchFollowedSongs: function(userId) {
    $.ajax({
      url: 'api/users/' + userId + '/followed_songs',
      method: 'GET',
      success: function(songs) {
        SongActions.receiveFollowedSongs(songs);
      }
    });
  },

  fetchSingleSong: function(id) {
    $.get('api/songs/' + id, {}, function(song) {
      SongActions.receiveSingleSong(song);
    });
  },

  createSongFollow: function(songFollow) {
    $.ajax({
      url: 'api/song_follows',
      method: 'POST',
      data: songFollow,
      success: function(songFollow) {
        this.fetchFollowedSongs(songFollow.user_id);
      }.bind(this)
    });
  },

  deleteSongFollow: function(songFollow) {
    $.ajax({
      url: 'api/song_follows',
      method: 'PATCH',
      data: songFollow,
      success: function(songFollow) {
        this.fetchFollowedSongs(songFollow.user_id);
      }.bind(this)
    });
  }

}

module.exports = ApiUtil;
