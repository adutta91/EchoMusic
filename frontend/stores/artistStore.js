// artist store
//    purpose: store relevant data on artists

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _artists = {};

var ArtistStore = new Store(Dispatcher);

ArtistStore.all = function() {
  var artists = []
  Object.keys(_artists).forEach(function(artistId){
    artists.push(_artists[artistId]);
  });
  return artists;
};

ArtistStore.find = function(artistId) {
  return _artists[artistId];
};

ArtistStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_ALL_ARTISTS':
      resetArtists(payload.artists);
      ArtistStore.__emitChange();
      break;
    case 'RECEIVE_SINGLE_ARTIST':
      resetArtist(payload.artist);
      ArtistStore.__emitChange();
      break;
  }
};

ArtistStore.findByName = function(name) {
  var result = null
  Object.keys(_artists).forEach(function(artistId) {
    if (_artists[artistId].name === name) {
      result = _artists[artistId];
    }
  })
  return result;
};

var resetArtists = function(artists) {
  var newArtists = {};
  artists.forEach(function(artist) {
    newArtists[artist.id] = artist;
  });
  _artists = newArtists;
};

var resetArtist = function(artist) {
  _artists[artist.id] = artist;
}

module.exports = ArtistStore;
