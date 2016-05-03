var ApiUtil = require("../utils/api_util.js");

var AlbumActions = {
  fetchAlbums: function(username) {
    ApiUtil.fetchAlbums(username);
  },
  fetchAlbum: function(albumId) {
    ApiUtil.fetchAlbum(albumId);
  },

  createAlbum: function(album) {
    ApiUtil.createAlbum(album);
  },

  deleteAlbum: function(albumId) {
    ApiUtil.deleteAlbum(albumId);
  }
};

module.exports = AlbumActions;
