var Dispatcher = require('../dispatcher/dispatcher.js');

var PhotoStore = require('../stores/photo_store');
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
  removeAlbum: function (album) {
    Dispatcher.dispatch({
      actionType: "REMOVE_ALBUM",
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
  updatePhotosToUpload: function (photos) {
    Dispatcher.dispatch({
      actionType: "UPDATE_PHOTOS_TO_UPLOAD",
      photos: photos
    });
  },
  receivePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_PHOTO",
      photo: photo
    });
  },
  receiveUpdatedPhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_UPDATED_PHOTO",
      photo: photo
    });
  },
  receiveNewPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_NEW_PHOTOS",
      photos: photos
    });
  },

  removePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: "REMOVE_PHOTO",
      photo: photo
    });
  }
};

 module.exports = ServerActions;
