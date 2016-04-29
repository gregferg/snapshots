var Dispatcher = require('../dispatcher/dispatcher.js');

 // Example Constants call
 // var PokemonConstants = require('../constants/pokemonConstants.js');

var ServerActions = {
  receiveAlbums: function (albums) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_ALBUMS",
      albums: albums
    });
  },
  receiveAlbum: function (album) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_ALBUM",
      album: album
    });
  },
  receivePhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_PHOTOS",
      photos: photos
    });
  },
  receivePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_PHOTO",
      photo: photo
    });
  }
};

 module.exports = ServerActions;
