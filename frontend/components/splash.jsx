var React = require('react');
var HashHistory = require('react-router').hashHistory;

var Splash = React.createClass({

  redirectToExampleOne: function() {
    HashHistory.push("/Peter Mohrbacher/portfolio");
  },
  redirectToExampleTwo: function() {
    HashHistory.push("/Eric Landon/portfolio");
  },
  redirectToExampleThree: function() {
    HashHistory.push("/Dave Powell/portfolio");
  },

  render: function(){
    return (
      <div className="splash">
        <div className="big-splash-image">
          <div className="splash-background"/>
          <div className="taglines">
            <h1>Showcase your photos in their best light</h1>
            <h2>by dragging and dropping your way to a beautiful portfolio</h2>
          </div>
        </div>


        <div className="exploring">
          <div className="exploring-title">
            Explore Our Featured Artists
          </div>
          <div className="exploring-options-box">
            <div
              className="exploring-options"
              onClick={this.redirectToExampleOne}>
              Peter Mohrbacher
            </div>
            <div
              className="exploring-options"
              onClick={this.redirectToExampleTwo}>
              Eric Landon
            </div>
            <div
              className="exploring-options"
              onClick={this.redirectToExampleThree}>
              Dave Powell
            </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
