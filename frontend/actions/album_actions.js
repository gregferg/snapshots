var ApiUtil = require("../utils/api_util.js");

var AlbumActions = {
  fetchAlbums: function(username) {
    ApiUtil.fetchAlbums(username);
  },

  createAlbum: function(album) {
    ApiUtil.createAlbum(album);
  }
};

module.exports = AlbumActions;
