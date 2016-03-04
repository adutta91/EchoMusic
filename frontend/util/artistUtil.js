// artist Util
//    purpose: all action requests regarding artists

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// ACTIONS
var ArtistActions = require('../actions/artistActions');
var ErrorActions = require('../actions/errorActions');

var ArtistUtil = {
  fetchAllArtists: function() {
    $.ajax({
      url: 'api/artists',
      method: 'GET',
      success: function(artists) {
        ArtistActions.receiveAllArtists(artists);
      },
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
      }
    });
  },

  fetchSingleArtist: function(artistId) {
    $.ajax({
      url: 'api/artists/' + artistId,
      method: 'GET',
      success: function(artist) {
        ArtistActions.receiveSingleArtist(artist);
      },
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
      }
    })
  },

  createArtist: function(artist) {
    $.ajax({
      url: 'api/artists',
      method: 'POST',
      data: artist,
      success: function(artist) {
        this.fetchAllArtists();
      }.bind(this),
      error: function(error) {
        ErrorActions.receiveError(error.responseText);
      }
    })
  }

};

module.exports = ArtistUtil;
