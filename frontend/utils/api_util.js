var ServerActions = require("../actions/server_actions.js");
var HashHistory = require('react-router').hashHistory;
var AppDispatcher = require('../dispatcher/dispatcher');



var ApiUtil = {
  fetchAlbums: function(username) {
    $.ajax({
      type: 'GET',
      url: 'api/albums',
      data: {username: username},
      success: function(albums) {
        ServerActions.receiveAlbums(albums);
      }
    });
  },
  createAlbum: function(album) {
    $.ajax({
      type: 'POST',
      url: 'api/albums',
      data: {album: album},
      success: function(createdAlbum) {
        console.log(createdAlbum);
        ServerActions.receiveAlbum(createdAlbum);
        ServerActions.emptyPhotoStore();
        album.successCloseAddAlbumFormModal();
        HashHistory.push("/" + createdAlbum.username + "/" + createdAlbum.id);
      },
      error: function(error) {
        AppDispatcher.dispatch({
          actionType: 'ALBUM_ERROR',
          errors: error.responseJSON.errors
        });
      }
    });
  },

  fetchPhotos: function(albumId) {
    $.ajax({
      type: 'GET',
      url: 'api/photos/',
      data: { album_id: albumId},
      success: function(photos) {
        ServerActions.receivePhotos(photos);
      }
    });
  },
  createPhotos: function(payload) {
    $.ajax({
      type: 'POST',
      url: 'api/photos/',
      data: {photos: payload.photos, album_id: payload.album_id },
      success: function(createdPhotos) {
        console.log(createdPhotos);
        ServerActions.receiveNewPhotos(createdPhotos);
        //HashHistory.push("/" + createdPhotos.username + "/" + payload.album_id);
      },
      error: function(error) {
        AppDispatcher.dispatch({
          actionType: 'ALBUM_ERROR',
          errors: error.responseJSON.errors
        });
      }
    });
  },


};

module.exports = ApiUtil;
