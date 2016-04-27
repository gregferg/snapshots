var UserConstants = require('../constants/user_constants');
var UserApiUtil = require('../utils/user_api_utils');
var UserStore = require('../stores/user_store');
var AppDispatcher = require('../dispatcher/dispatcher');
var HashHistory = require('react-router').hashHistory;


var UserActions = {
	fetchCurrentUser: function(){
		UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
	},
	signup: function(user){
		UserApiUtil.post({
			url: "/api/users",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	login: function(username, password){
		UserApiUtil.post({
			url: "/api/session",
			user: {username: username, password: password },
			success: function() {
				UserActions.receiveCurrentUser;
				HashHistory.push("/" + UserStore.currentUser.username);
			},
			error: UserActions.handleError
		});
	},
	guestLogin: function(){
		UserActions.login({username: "guest", password: "password"});
	},
	receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
			user: user
		});
	},
	handleError: function(error) {
		console.log(error);
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
	logout: function(){
		UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	}
};

module.exports = UserActions;
