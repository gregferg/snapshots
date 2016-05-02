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
  },
  updatePhotosToUpload: function(photos) {
    ApiUtil.updatePhotosToUpload(photos);
  },
  updatePhoto: function(photo) {
    ApiUtil.updatePhoto(photo);
  }
};

module.exports = PhotoActions;
