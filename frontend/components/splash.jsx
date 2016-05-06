var React = require('react');
var HashHistory = require('react-router').hashHistory;



var Splash = React.createClass({

  redirectToExampleOne: function() {
    HashHistory.push("/Demo");
  },
  redirectToExampleTwo: function() {

  },
  redirectToExampleThree: function() {

    return <img className="splash-background" src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8f51973741d4b25375b6bb3de767dd67" />;

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
