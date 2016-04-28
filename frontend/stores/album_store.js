var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var AlbumStore = new Store(AppDispatcher);

var _albums = {};

AlbumStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_ALBUMS":
      resetAlbums(payload.albums);
      break;
  }
  AlbumStore.__emitChange();
};

AlbumStore.all = function(){
  return Object.keys(_albums).map(function (albumId) {
    return _albums[albumId];
  });
};

var resetAlbums = function(albums) {
  _albums = {};

  albums.forEach(function (album) {
    _albums[album.id] = album;
  });
};


module.exports = AlbumStore;
