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
  emptyPhotoStore: function () {
    Dispatcher.dispatch({
      actionType: "EMPTY_PHOTOSTORE"
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
  },
  receiveNewPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_NEW_PHOTOS",
      photos: photos
    });
  }
};

 module.exports = ServerActions;
