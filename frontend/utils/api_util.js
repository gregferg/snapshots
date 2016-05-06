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
  fetchAlbum: function(albumId) {
    $.ajax({
      type: 'GET',
      url: 'api/albums/' + albumId,
      success: function(album) {
        ServerActions.receiveAlbum(album);
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
        var payload = { photos: createdAlbum.photos, album_id: createdAlbum.id};
        ApiUtil.createPhotos(payload);
        HashHistory.push("/" + createdAlbum.username + "/albums/" + createdAlbum.id);
      },
      error: function(error) {
        console.log("ERROR");
        console.log(error);
        AppDispatcher.dispatch({
          actionType: 'ALBUM_ERROR',
          errors: error.responseJSON.errors
        });
      }
    });
  },

  deleteAlbum: function(albumId) {
    $.ajax({
      type: 'DELETE',
      url: 'api/albums/' + albumId,
      success: function(album) {
        ServerActions.removeAlbum(album);
        HashHistory.push("/" + album.username + "/portfolio");
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
updatePhotosToUpload: function(photos) {
  ServerActions.updatePhotosToUpload(photos);
},
  createPhotos: function(payload) {
    $.ajax({
      type: 'POST',
      url: 'api/photos/',
      data: {photos: payload.photos, album_id: payload.album_id },
      success: function(createdPhotos) {
        ServerActions.emptyPhotosToUpload();
        ServerActions.receiveNewPhotos(createdPhotos);
      },
      error: function(error) {
        AppDispatcher.dispatch({
          actionType: 'ALBUM_ERROR',
          errors: error.responseJSON.errors
        });
      }
    });
  },
  updatePhoto: function(photo) {
    $.ajax({
      type: 'PATCH',
      url: 'api/photos/' + photo.id,
      data: {title: photo.title, description: photo.description },
      success: function(updatedPhoto) {
        ServerActions.receiveUpdatedPhoto(updatedPhoto);
      },
      error: function(error) {
        AppDispatcher.dispatch({
          actionType: 'ALBUM_ERROR',
          errors: error.responseJSON.errors
        });
      }
    });
  },

  deletePhoto: function(photo) {
    $.ajax({
      type: 'DELETE',
      url: 'api/photos/' + photo.id,
      success: function(createdPhoto) {
        console.log(photo);
        ServerActions.removePhoto(photo);
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
