// song Util
//    purpose: all non-server action requests regarding songs

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var SongActions = require('../actions/songActions');

SongUtil = {

  loadSong: function(songId) {
    SongActions.loadSong(songId);
  },

  pauseSong: function() {
    SongActions.pauseSong();
  },

  endSong: function() {
    SongActions.endSong();
  },

  playSong: function() {
    SongActions.playSong();
  },

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

  fetchArtistSongs: function(artistId) {
    $.ajax({
      url: 'api/artists/' + artistId + '/songs',
      method: 'GET',
      success: function(songs) {
        SongActions.receiveSongs(songs);
      }
    });
  }
}

module.exports = SongUtil;
