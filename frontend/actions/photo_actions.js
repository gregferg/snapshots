var ApiUtil = require("../utils/api_util.js");

var PhotoActions = {
  fetchPhotos: function(albumId) {
    ApiUtil.fetchPhotos(albumId);
  },

  createPhoto: function(photo) {
    ApiUtil.createPhoto(photo);
  }
};

module.exports = PhotoActions;
