var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var Link = require('react-router').Link;
var AddAlbum = require('../albums/add_album');



var NavBar = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function () {
    return ({ modalOpen: false });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ user: newProps.user });
  },

  logout: function(e) {
    e.preventDefault();
    UserActions.logout();
  },
  redirectToHome: function(e) {
    UserActions.clearViewedUser();
    HashHistory.push("/");
  },
  redirectToUserPage: function(e) {
    HashHistory.push("/" + this.state.user.username);
  },
  className: function() {
    if (this.props.isHomePage) {
      return "nav_bar home-page";
    }
    return "nav_bar";
  },
  buttons: function (){
    if (this.state.user) {
      return (
        <div className="nav-options">
          <AddAlbum demoAccount={this.props.demoAccount}/>
          <div className="user-page" onClick={this.redirectToUserPage}>Profile</div>
          <div className="logout" onClick={this.logout}>Log Out</div>
        </div>
        );
    } else {
      return  (
        <div className="login_signup">
          <Link to="/login" className="login">LOGIN</Link>
          <Link to="/new_user" className="new-user">TRY IT OUT</Link>
        </div>
      );
    }
  },
  render: function(){
    return (
      <div className={this.className()}>
        <div className="nav-bar content">
          <div id="logo" onClick={this.redirectToHome}>SNAPSHOTS</div>
          {this.buttons()}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
