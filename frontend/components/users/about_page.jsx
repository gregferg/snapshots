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
      return <div className="edit-about-me">Edit Your About Me</div>;
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
      return (
        <div>
          <p>{this.state.viewedUser.about_me_body}</p>
          <br />
          <p>Regards, {this.state.viewedUser.username}</p>
        </div>
      );
    } else {
      return ;
    }
  },

  render: function(){
    return (
      <div className="about-page">
        <img src="http://portfolio.shoottokyo.com/Logos/n-VLZRx/i-xsJhhbS/0/O/i-xsJhhbS.jpg" />
        <div className="about-me-info">
          {this.editForm()}
          {this.about_title()}
          {this.about_body()}
      </div>
      </div>
    );
  }
});

module.exports = AboutPage;
