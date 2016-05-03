var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var UserStore = require("../../stores/user_store");
var Link = require('react-router').Link;



var HomePage = React.createClass({
  mixins: [CurrentUserState],

  render: function(){
    return (
      <div className="home-page">

      </div>
    );
  }
});

module.exports = HomePage;
