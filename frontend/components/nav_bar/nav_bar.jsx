var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var Link = require('react-router').Link;
var SearchBar = require('./search_bar');
var AddAlbum = require('./add_album');



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
    if (this.state.user) {
      HashHistory.push("/" + this.state.user.username);
    } else {
      HashHistory.push("/");
    }
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
        <div>
          <AddAlbum />
          <button className="logout" onClick={this.logout}>Log Out</button>
        </div>
        );
    } else {
      return  (
        <div className="login_signup">
          <Link to="/new_user">TRY IT OUT</Link>
          <Link to="/login">LOGIN</Link>
        </div>
      );
    }
  },
  render: function(){

    var currentUser =
      this.state.user ? <p> Welcome back, {this.state.user.username} </p> : null;

    var button;


    return (
      <div className={this.className()}>
        <div id="logo" onClick={this.redirectToHome}>
          <p> SNAPSHOT LOGO </p>
        </div>
        {this.buttons()}
      </div>
    );
  }
});

module.exports = NavBar;
