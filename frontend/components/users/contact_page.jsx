var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var UserStore = require("../../stores/user_store");
var Link = require('react-router').Link;



var ContactPage = React.createClass({
  // mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      users: "UserStore.all()",
      name: "",
      email: "",
      message: "",
      sentMessage: false
     };
  },
  nameChange: function(e) {
    this.setState({ name: e.target.value });
  },
  emailChange: function(e) {
    this.setState({ email: e.target.value });
  },
  messageChange: function(e) {
    this.setState({ message: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    this.setState({
      name: "",
      email: "",
      message: "",
      sentMessage: true
    });
  },
  sentMessage: function() {
    if (this.state.sentMessage) {
      return (
        <div className="sent-message">
          Message Sent!
        </div>
      );
    } else {
      return (
        <div className="sent-message">
        </div>
      );
    }
  },

  render: function(){

    var contact = "Contact " + this.props.params.username;

    return (
      <div className="contact-page">
        <div>
          <img src="http://portfolio.shoottokyo.com/Portfolio-Gallery/i-XfwrwXW/0/X3/ShootTokyoSmugMug-X3.jpg" />
        </div>
          <div className="form-side">
          <h1 className="contact-form">{contact}</h1>
          <form>
            <div className="form">
              <label> Name:
                <div></div>
                <input
                  type="text"
                  onChange={this.nameChange}
                  value={this.state.name}/>
              </label>

              <label> Email:
                <div></div>
                <input
                  type="text"
                  onChange={this.emailChange}
                  value={this.state.email}/>
              </label>

              <label className="message-label"> Message:
                <div></div>
                <textarea
                  type="text"
                  onChange={this.messageChange}
                  value={this.state.message}/>
              </label>

              <div className="submit-button" onClick={this.handleSubmit}>
                Send Email
              </div>
              {this.sentMessage()}
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ContactPage;
