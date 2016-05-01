var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var UserStore = require("../../stores/user_store");



var AboutPage = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { viewedUser: UserStore.viewedUser() };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateView);
    UserActions.fetchUser(this.props.params.username);
  },

  updateView: function() {
    this.setState({ viewedUser: UserStore.viewedUser() });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },
  editForm: function (){
    if (this.state.user && this.state.viewedUser.username === this.state.user.username) {
      return <p>Edit Your About Me</p>;
    }
  },
  backToViewedUserHomePage: function(e) {
    e.preventDefault();

    HashHistory.push("/" + this.state.viewedUser.username);
  },
  about_title: function() {
    if (this.state.viewedUser.about_me_title) {
      return <h3>{this.state.viewedUser.about_me_title}</h3>;
    } else if (this.state.user && this.state.viewedUser.username === this.state.user.username){
      return <h3>You haven't written your about me yet!</h3>;
    } else {
      return (
        <div>
          <h3>This user hasn't made their about me page yet</h3>
          <button onClick={this.backToViewedUserHomePage}>Back to {this.state.viewedUser.username}&#39;s Homepage.</button>
        </div>
      );
    }
  },

  about_body: function() {
    if (this.state.viewedUser.about_me_body) {
      return <h3>{this.state.viewedUser.about_me_body}</h3>;
    } else {
      return ;
    }
  },

  render: function(){
    return (
      <div className="about-page">
        {this.about_title()}
        {this.about_body()}
        {this.editForm()}
      </div>
    );
  }
});

module.exports = AboutPage;
