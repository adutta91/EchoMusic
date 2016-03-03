// functions for all artist actions
//    purpose: dispatch actions to ArtistStore

var Dispatcher = require('../dispatcher');

ArtistActions = {
  receiveAllArtists: function(artists) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_ALL_ARTISTS",
      artists: artists
    });
  }
};

module.exports = ArtistActions;
