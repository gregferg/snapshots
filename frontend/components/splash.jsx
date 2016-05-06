var React = require('react');
var HashHistory = require('react-router').hashHistory;



var Splash = React.createClass({

  redirectToExampleOne: function() {
    HashHistory.push("/");
  },
  redirectToExampleTwo: function() {

  },
  redirectToExampleThree: function() {

  },

  render: function(){
    return (
      <div className="splash">
        <div className="big-splash-image">
          <img className="splash-background" src="http://portfolio.shoottokyo.com/Portfolio-Gallery/i-FnsCK98/0/X2/ShootTokyoSmugMug-7-X2.jpg" />
          <div className="taglines">
            <h1>Showncase your photos in their best light</h1>
            <h2>by dragging and dropping your way to a new beautiful portfolio</h2>
          </div>
        </div>


        <div className="exploring">
          <div className="exploring-title">
            Explore Our Featured Artists
          </div>
          <div className="exploring-options-box">
            <div className="exploring-options" onClick={this.redirectToExampleOne}>
              PERSONE 1
            </div>
            <div className="exploring-options" onClick={this.redirectToExampleTwo}>
              PERSONE 2
            </div>
            <div className="exploring-options" onClick={this.redirectToExampleThree}>
              PERSONE 3
            </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
