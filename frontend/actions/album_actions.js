var ApiUtil = require("../utils/api_util.js");

var AlbumActions = {
  fetchAlbums: function(username) {
    ApiUtil.fetchAlbums(username);
  }
};

module.exports = AlbumActions;
