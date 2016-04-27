var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var Link = require('react-router').Link;
var SearchBar = require('./search_bar');



var NavBar = React.createClass({
  mixins: [CurrentUserState],

  logout: function(e) {
    e.preventDefault();
    UserActions.logout();
  },
  redirectToHome: function(e) {
    HashHistory.push("/");
  },
  render: function(){

    var currentUser =
      this.state.user ? <p> Welcome back, {this.state.user.username} </p> : null;
    var button;
      console.log(this.state.user);
      if (this.state.user) {
        button =  <button onClick={this.logout}>Log Out</button>;
      } else {
        button =  (
          <div>
            <Link to="/new_user">Sign Up!</Link>
            <Link to="/login">Log in</Link>
          </div>
        );
      }
    return (
      <div className="nav_bar">
        <div id="logo" onClick={this.redirectToHome}>
          <p> SNAPSHOT LOGO </p>
        </div>
        <SearchBar />
        <div>
          {currentUser}
          {button}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
