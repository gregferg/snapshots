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
  createPhoto: function(album) {
    $.ajax({
      type: 'POST',
      url: 'api/albums/',
      data: {album: album},
      success: function(createdPhoto) {
        console.log(createdPhoto);
        ServerActions.receivePhoto(createdPhoto);
        HashHistory.push("/" + createdPhoto.username + "/" + createdPhoto.id);
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
