var React = require('react');
var HashHistory = require('react-router').hashHistory;



var SiteNavBar = React.createClass({
  redirectToHomePage: function(e) {
    HashHistory.push("/" + this.props.username);
  },

  redirectToAboutPage: function(e) {
    HashHistory.push("/" + this.props.username + "/about");
  },

  redirectToContactPage: function(e) {
    HashHistory.push("/" + this.props.username + "/contact");
  },

  render: function(){
    return (
      <div className="site-nav">
        <div className="site-navigation">
          <div onClick={this.redirectToHomePage}>Home</div>
          <div onClick={this.redirectToAboutPage}>About</div>
          <div onClick={this.redirectToContactPage}>Contact</div>
        </div>
        <div className="username">
          <div>{this.props.username}&#39;s Home Page</div>
        </div>
      </div>
    );
  }
});

module.exports = SiteNavBar;
