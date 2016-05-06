var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var UserStore = require("../../stores/user_store");
var Link = require('react-router').Link;



var HomePage = React.createClass({
  render: function(){
    return (
      <div className="home-page">
        <div className="home-info">
          <div className="home-info-box">  
          <h1 className="username">{this.props.params.username}</h1>
          <h4>THE PORTFOLIO</h4>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
