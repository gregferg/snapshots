var ApiUtil = require("../utils/api_util.js");

var PhotoActions = {
  fetchPhotos: function(albumId) {
    ApiUtil.fetchPhotos(albumId);
  },

  createPhotos: function(photos) {
    ApiUtil.createPhotos(photos);
  }
};

module.exports = PhotoActions;
