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
    console.log(this.props.params);
    if (this.props.url === "/demo" && option === "home") {return "selected"; }
    if (this.props.url.indexOf(option) > -1) { return "selected"; }
    if (this.props.params.album_id && option === "portfolio") { return "selected"; }

  },

  render: function(){
    return (
      <div className="site-nav">
        <div className="site-nav-bar-content">
          <div className="site-navigation">
            <div className={this.selected("home")} onClick={this.redirectToHomePage}>Home</div>
            <div className={this.selected("portfolio")} onClick={this.redirectToPortfolio}>Portfolio</div>
            <div className={this.selected("about")} onClick={this.redirectToAboutPage}>About</div>
            <div className={this.selected("contact")} onClick={this.redirectToContactPage}>Contact</div>
          </div>
          <div className="username">
            <div>{this.props.username}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SiteNavBar;
