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

  fetchSingleArtist: function(artistId) {
    $.ajax({
      url: 'api/artists/' + artistId,
      method: 'GET',
      success: function(artist) {
        ArtistActions.receiveSingleArtist(artist);
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
      }.bind(this)
    })
  }

};

module.exports = ArtistUtil;
