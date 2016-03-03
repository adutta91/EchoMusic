// artist Util
//    purpose: all action requests regarding artists

// ACTIONS
var ArtistActions = require('../actions/artistActions');


var ArtistUtil = {
  fetchAllArtists: function() {
    $.ajax({
      url: 'api/artists',
      method: 'GET',
      success: function(artists) {
        ArtistActions.receiveAllArtists(artists);
      }
    });
  },

  createArtist: function(artist) {
    $.ajax({
      url: 'api/artists',
      method: 'POST',
      data: artist,
      success: function(artist) {
        this.fetchAllArtists();
      }.bind(this)
    })
  }

};

module.exports = ArtistUtil;
