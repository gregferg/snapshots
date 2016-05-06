var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var UserStore = require("../../stores/user_store");



var AboutPage = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { viewedUser: UserStore.viewedUser(), editting: false };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateView);
    UserActions.fetchUser(this.props.params.username);
  },

  updateView: function() {
    this.setState({ viewedUser: UserStore.viewedUser() });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },
  editButton: function (){
    if (this.state.user && this.state.viewedUser.username === this.state.user.username) {
      if (this.state.editting) {
        return <div className="edit-about-me" onClick={this.toggleEditting}>Update</div>;
      } else {
        return <div className="edit-about-me" onClick={this.toggleEditting}>Edit Your About Me</div>;
      }
    }
  },
  toggleEditting: function() {
    if (this.state.editting) {
      UserActions.updateUser({
        id: this.state.viewedUser.id,
        title: this.state.title,
        body: this.state.body
      });

      console.log("SHOULD CHANGE");

      this.setState({ editting: false });
    } else {
      this.setState({
        editting: true,
        title: this.state.viewedUser.about_me_title,
        body:this.state.viewedUser.about_me_body
      });



    }
  },
  backToViewedUserHomePage: function(e) {
    e.preventDefault();

    HashHistory.push("/" + this.state.viewedUser.username);
  },
  about_title: function() {
    if (this.state.viewedUser.about_me_title) {
      return <h3>{this.state.viewedUser.about_me_title}</h3>;
    } else if (this.state.user && this.state.viewedUser.username === this.state.user.username){
      return <h3>You haven't written your about me yet!</h3>;
    } else {
      return (
        <div>
          <h3>This user hasn't made their about me page yet</h3>
          <button onClick={this.backToViewedUserHomePage}>Back to {this.state.viewedUser.username}&#39;s Homepage.</button>
        </div>
      );
    }
  },

  about_body: function() {
    if (this.state.viewedUser.about_me_body) {
      return (
        <div>
          <p>{this.state.viewedUser.about_me_body}</p>
          <br />
          <p>Regards, {this.state.viewedUser.username}</p>
        </div>
      );
    } else {
      return ;
    }
  },
  titleChange: function(e) {
    this.setState({ title: e.target.value});
  },
  bodyChange: function(e) {
    this.setState({ body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  editForm: function() {
    return (
      <form className="form">
				<label className="title">
					<input
            type="text"
            placeholder="Welcome Tagline"
            onChange={this.titleChange}
            value={this.state.title}/>
				</label>
				<br/>

        <div className="body">
  				<label >
  					<textarea
              placeholder="Your About Me"
              onChange={this.bodyChange}
              value={this.state.body}/>
  				</label>
  				<br/>
          <p>Regards, Demo</p>
      </div>
			</form>
    );
  },

  renderAboutMe: function() {
    if (this.state.editting) {
      return (
        <div>
          {this.editButton()}
          {this.editForm()}
        </div>
      );
    } else {
      return (
        <div>
          {this.editButton()}
          {this.about_title()}
          {this.about_body()}
        </div>
      );
    }
  },
  contact: function (){
    var photoToRender;
    switch (this.state.viewedUser.username) {
      case 'Eric Landon':
        photoToRender ='http://tortus-copenhagen.com/wp-content/uploads/2014/11/portrait3-600x600.jpg';
        break;
      case 'Peter Mohrbacher':
        photoToRender = 'http://static1.squarespace.com/static/52b99140e4b02ffea75851ab/t/56bf641386db43b5489f4e77/1455383619587/artist+photo.jpg?format=300w';
        break;
      case 'Dave Powell':
        photoToRender = 'http://portfolio.shoottokyo.com/Logos/n-VLZRx/i-xsJhhbS/0/O/i-xsJhhbS.jpg';
        break;
      default:
        photoToRender ='http://tortus-copenhagen.com/wp-content/uploads/2014/11/portrait3-600x600.jpg';
    }

    return photoToRender;
  },

  render: function(){
    return (
      <div className="about-page">
        <img src={this.contact()} />
        <div className="about-me-info">
          {this.renderAboutMe()}
        </div>
      </div>
    );
  }
});

module.exports = AboutPage;
