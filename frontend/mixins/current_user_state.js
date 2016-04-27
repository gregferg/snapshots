var UserActions = require('../actions/user_actions');
var UserStore = require('../stores/user_store');

module.exports = {
  getInitialState: function() {
    return { user: UserStore.currentUser(), errors: UserStore.errors() };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateUser);
    if (!UserStore.currentUser) {
      UserActions.fetchCurrentUser();
    }
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateUser: function() {
    this.setState( {user: UserStore.currentUser(), errors: UserStore.errors()} );
  }
};
