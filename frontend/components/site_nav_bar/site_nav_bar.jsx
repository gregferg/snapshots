var React = require('react');
var HashHistory = require('react-router').hashHistory;


var SiteNavBar = React.createClass({
  redirectToHomePage: function(e) {
    HashHistory.push("/" + this.props.username);
  },

  redirectToPortfolio: function(e) {
    HashHistory.push("/" + this.props.username + "/portfolio");
  },

  redirectToAboutPage: function(e) {
    HashHistory.push("/" + this.props.username + "/about");
  },

  redirectToContactPage: function(e) {
    HashHistory.push("/" + this.props.username + "/contact");
  },

  selected: function(option) {
    if (this.props.url === "/" + this.props.username && option === "home") {return "selected"; }
    if (this.props.url.indexOf(option) > -1) { return "selected"; }
    if (this.props.params.album_id && option === "portfolio") { return "selected"; }

  },

  homepage: function() {
    if (this.props.url === "/" + this.props.username) {
      return "site-nav user-home-nav";
    }
    return "site-nav";
  },

  render: function(){
    return (
      <div className={this.homepage()}>
        <div className="site-nav-bar-content">
          <div className="site-navigation">
            <div
              className={this.selected("home")}
              onClick={this.redirectToHomePage}>
              Home
            </div>
            <div
              className={this.selected("portfolio")}
              onClick={this.redirectToPortfolio}>
              Portfolio
            </div>
            <div
              className={this.selected("about")}
              onClick={this.redirectToAboutPage}>
              About
            </div>
            <div
              className={this.selected("contact")}
              onClick={this.redirectToContactPage}>
              Contact
            </div>
          </div>
          <div className="username">
            <h1>{this.props.username}</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SiteNavBar;
