var ApiUtil = require("../utils/api_util.js");

var AlbumActions = {
  fetchAlbums: function(username) {
    ApiUtil.fetchAlbums(username);
  },

  createAlbum: function(album) {
    ApiUtil.createAlbum(album);
  },

  deleteAlbum: function(albumId) {
    ApiUtil.deleteAlbum(albumId);
  }
};

module.exports = AlbumActions;
