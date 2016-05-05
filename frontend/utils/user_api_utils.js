var AppDispatcher = require('../dispatcher/dispatcher');

var UserApiUtil = {
	post: function(options){
		$.ajax({
			url: options.url,
			type: "post",
			data: {user: options.user},
			success: options.success,
			error: options.error
		});
	},
	logout: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: success,
			error: error
		});
	},
	fetchCurrentUser: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'get',
			success: success,
			error: error
		});
	},
	fetchUser: function(username){
		$.ajax({
			url: '/api/users',
			method: 'get',
			data: {username: username},
			success: function(user) {
				AppDispatcher.dispatch({
					actionType: "RECEIVE_USER",
					user: user
				});
			}
		});
	},
	updateUser: function(user) {
		console.log(user);
		$.ajax({
			url: '/api/users/' + user.id,
			method: 'PATCH',
			data: {user: user},
			success: function(updatedUser) {
				AppDispatcher.dispatch({
					actionType: "RECEIVE_UPDATED_USER",
					updatedUser: updatedUser
				});
			}
		});
	}
};

module.exports = UserApiUtil;
