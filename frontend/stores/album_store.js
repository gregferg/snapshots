var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var AlbumStore = new Store(AppDispatcher);

var _albums = {};
var _errors = {};
var _currentAlbum = {};

AlbumStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_ALBUMS":
      resetAlbums(payload.albums);
      break;
    case "RECEIVE_ALBUM":
      addAlbum(payload.album);
      break;
    case "REMOVE_ALBUM":
      removeAlbum(payload.album);
      break;
    case "ALBUM_ERROR":
      setErrors(payload.errors);
      break;
  }
};

AlbumStore.all = function(){
  return Object.keys(_albums).map(function (albumId) {
    return _albums[albumId];
  });
};

AlbumStore.currentAlbum = function(){
 return _currentAlbum;
};

var resetAlbums = function(albums) {
  _albums = {};

  albums.forEach(function (album) {
    _albums[album.id] = album;
  });

  AlbumStore.__emitChange();
};

var removeAlbum = function (album) {
  delete _albums[album.id];
  AlbumStore.__emitChange();

};

var addAlbum = function (album) {
  _albums[album.id] = album;
  _currentAlbum = album;
  AlbumStore.__emitChange();
};

var setErrors = function(errors){
  _errors = errors;
  AlbumStore.__emitChange();
};

AlbumStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};



module.exports = AlbumStore;
