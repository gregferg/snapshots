var React = require('react');
var HashHistory = require('react-router').hashHistory;


var CannotDelete = React.createClass({
  redirectToNewUser: function () {
    HashHistory.push("/new_user");
  },
  render: function(){
    return (
      <div className="cannot-delete">
        <p>Sorry, you can't change things from the demo accounts</p>
        <div className="create-your-own" onClick={this.redirectToNewUser}>
          Create Your Own
        </div>
      </div>
    );
  }
});

module.exports = CannotDelete;
