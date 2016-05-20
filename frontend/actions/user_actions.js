
var UserConstants = require('../constants/user_constants');
var UserApiUtil = require('../utils/user_api_utils');
var UserStore = require('../stores/user_store');
var AppDispatcher = require('../dispatcher/dispatcher');
var HashHistory = require('react-router').hashHistory;


var UserActions = {
	clearViewedUser: function() {
		AppDispatcher.dispatch({
			actionType: "CLEARED_VIEWED_USER"
		});
	},
	fetchCurrentUser: function(){
		UserApiUtil.fetchCurrentUser(UserActions.loggedInOrNot);
	},
	fetchUser: function(username){
		UserApiUtil.fetchUser(username);
	},
	signup: function(user){
		UserApiUtil.post({
			url: "/api/users",
			user: user,
			success: UserActions.sucessfulLogin,
			error: UserActions.handleError
		});
	},
	login: function(username, password){
		UserApiUtil.post({
			url: "/api/session",
			user: {username: username, password: password },
			success: UserActions.sucessfulLogin,
			error: UserActions.handleError
		});
	},
	sucessfulLogin: function(user) {
		UserActions.receiveCurrentUser(user);
		HashHistory.push("/" + user.username + "/portfolio");
	},
	demoLogin: function() {
		switch(Math.floor(Math.random() * (3 - 0) + 0)) {
			case 0:
				UserActions.login("Eric Landon", "password");
				break;
			case 1:
				UserActions.login("Peter Mohrbacher", "password");
				break;
			case 2:
				UserActions.login("Dave Powell", "password");
				break;
		}
	},
	loggedInOrNot: function(payload) {
		if (payload.username) {
			UserActions.receiveCurrentUser(payload);
		} else {
			UserActions.handleError(payload);
		}
	},
	receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
			user: user
		});
	},
	handleError: function(error) {
		if (!error.responseJSON) {
			return;
		}
		AppDispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},
	removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT,
		});
	},
	updateUser: function(user) {
		UserApiUtil.updateUser(user);
	},
	sucessfulLogout: function(){
		UserActions.removeCurrentUser();
		HashHistory.push("/");
	},
	logout: function(){
		UserApiUtil.logout(UserActions.sucessfulLogout, UserActions.handleError);
	}
};

module.exports = UserActions;
