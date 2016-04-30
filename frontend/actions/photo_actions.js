var ApiUtil = require("../utils/api_util.js");

var PhotoActions = {
  fetchPhotos: function(albumId) {
    ApiUtil.fetchPhotos(albumId);
  },

  createPhotos: function(photos) {
    ApiUtil.createPhotos(photos);
  },

  deletePhoto: function(photo) {
    ApiUtil.deletePhoto(photo);
  }
};

module.exports = PhotoActions;
