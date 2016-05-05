var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var PhotoStore = new Store(AppDispatcher);

var _photos = {};
var _photosToUpload = {};
var _errors = {};
var _photoDetail =  "";


PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_PHOTOS":
      resetPhotos(payload.photos);
      break;
    case "RECEIVE_NEW_PHOTOS":
      addNewPhotos(payload.photos);
      break;
    case "UPDATE_PHOTOS_TO_UPLOAD":
      PhotoStore.addPhotosToPhotosToUpload(payload.photos);
      break;
    case "RECEIVE_PHOTO":
      addPhoto(payload.photo);
      break;
    case "RECEIVE_UPDATED_PHOTO":
      updatePhoto(payload.photo);
      break;
    case "REMOVE_PHOTO":
      removePhoto(payload.photo);
      break;
    case "PHOTO_ERROR":
      setErrors(payload.errors);
      break;
    case "EMPTY_PHOTOSTORE":
      resetPhotos([]);
      emptyPhotosToUpload();
      break;
    case "EMPTY_PHOTOS_TO_UPLOAD":
      emptyPhotosToUpload();
      break;
  }
};

PhotoStore.all = function(){
  return Object.keys(_photos).map(function (photoId)
  { return _photos[photoId]; });
};
PhotoStore.photosToUpload = function(){
  return Object.keys(_photosToUpload).map(function (url)
    {return _photosToUpload[url]; }
  );
};

var emptyPhotosToUpload = function() {
  _photosToUpload = {};

  PhotoStore.__emitChange();
};

PhotoStore.addPhotosToPhotosToUpload = function(photos) {
  photos.forEach(function (photo) {

    _photosToUpload[photo.url] = photo;
  });

  PhotoStore.__emitChange();
};

PhotoStore.photoDetail = function (photoId){
  return _photos[photoId];
};

PhotoStore.nextPhoto = function (currentPhotoId) {
  var keys = Object.keys(_photos);
  var nextPhotoId = keys.indexOf(currentPhotoId.toString()) + 1;
  if (nextPhotoId === keys.length) {
    nextPhotoId = 0;
  }

  _photoDetail = _photos[keys[nextPhotoId]];
  return _photoDetail;
};


PhotoStore.previousPhoto = function (currentPhotoId) {
  var keys = Object.keys(_photos);
  var previousPhotoId = keys.indexOf(currentPhotoId.toString()) - 1;
  if (previousPhotoId < 0 ) {
    previousPhotoId = keys.length - 1;
  }

  _photoDetail = _photos[keys[previousPhotoId]];
  return _photoDetail;
};


var resetPhotos = function (photos) {
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

var updatePhoto = function (photo) {
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
