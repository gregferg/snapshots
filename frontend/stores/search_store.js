var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var SearchStore = new Store(AppDispatcher);

var _users;

SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_SEARCH_RESULTS":
    	updateSearchResults(payload.results);
      break;
  }
  SearchStore.__emitChange();
};

SearchStore.users = function(){
  return Object.keys(_users).map(function (userId) {
    return _users[userId];
  });
};

var updateSearchResults = function(users) {
  _users = {};

  Object.keys(users).map(function (user) {
    return _users[user];
  });
};


module.exports = SearchStore;
