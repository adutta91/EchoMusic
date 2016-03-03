// functions for all artist actions
//    purpose: dispatch actions to ArtistStore

var Dispatcher = require('../dispatcher');

ArtistActions = {
  receiveAllArtists: function(artists) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_ALL_ARTISTS",
      artists: artists
    });
  },

  receiveSingleArtist: function(artist) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_SINGLE_ARTIST",
      artist: artist
    });
  }
};

module.exports = ArtistActions;
