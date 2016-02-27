var SongActions = require('../actions/songActions');

var ApiUtil = {

  // USER QUERIES ---------------------------------------------*****
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        UserActions.logInUser(user);
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('ya done goofed');
      }
    })
  },

  createSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        UserActions.logInUser(user);
      },
      error: function(user) {
        window.location = '/';
        // TODO: errors
        alert('ya done goofed');
      }
    });
  },

  resetSession: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: {id: user.id},
      success: function(user) {
        UserActions.logOutUser();
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
        debugger;
        alert(error);
      }
    });
  },

  fetchSongs: function() {
    $.get('api/songs', {}, function(songs) {
      SongActions.receiveAll(songs);
    });
  },

  fetchSingleSong: function(id) {
    $.get('api/songs/' + id, {}, function(song) {
      SongActions.receiveSingleSong(song);
    });
  }

}

module.exports = ApiUtil;
