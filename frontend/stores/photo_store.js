var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var PhotoStore = new Store(AppDispatcher);

var _photos = {}; var _errors = {};

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_PHOTOS":
      resetPhotos(payload.photos);
      break;
    case "RECEIVE_NEW_PHOTOS":
      addNewPhotos(payload.photos);
      break;
    case "RECEIVE_PHOTO":
      addPhoto(payload.photo);
      break;
    case "REMOVE_PHOTO":
      removePhoto(payload.photo);
      break;
    case "PHOTO_ERROR":
      setErrors(payload.errors);
      break;
    case "EMPTY_PHOTOSTORE":
      resetPhotos([]);
      break;
  }
};

PhotoStore.all = function(){
  return Object.keys(_photos).map(function (photoId)
  { return _photos[photoId]; });
};

var resetPhotos = function(photos) {
  _photos = {};

  photos.forEach(function (photo) {
    _photos[photo.id] = photo;
  });

  PhotoStore.__emitChange();
};

var addPhoto = function (photo) {
  _photos[photo.id] = photo;
  PhotoStore.__emitChange();
};

var addNewPhotos = function (photos) {
  photos.forEach(function (photo) {
    _photos[photo.id] = photo;
  });

  PhotoStore.__emitChange();
};

var removePhoto = function (photo) {
  delete _photos[photo.id];
  PhotoStore.__emitChange();

};

var setErrors = function(errors){
  _errors = errors;
  PhotoStore.__emitChange();
};

PhotoStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};


module.exports = PhotoStore;
