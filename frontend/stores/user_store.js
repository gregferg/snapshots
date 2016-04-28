var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var myStorage = localStorage;

var UserStore = new Store(AppDispatcher);

var _currentUser = JSON.parse(myStorage.getItem("currentUser"));
var _errors;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.user);
      break;
    case "LOGOUT":
    	UserStore.logout();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.login = function(user){
  _currentUser = user;
  myStorage.setItem("currentUser", JSON.stringify(user));
  _errors = null;
};

UserStore.logout = function(){
  myStorage.setItem("currentUser", "false");
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function(){
  if (myStorage.getItem("currentUser") === "false"){
      return null;
    } else {
      return _currentUser;
    }
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

module.exports = UserStore;
