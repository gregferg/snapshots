var React = require("react");
var UserActions = require("../../actions/user_actions");
var CurrentUserState = require("../../mixins/current_user_state");
var UserStore = require('../../stores/user_store');
var HashHistory = require('react-router').hashHistory;


var NewUserForm = React.createClass({
	mixins: [CurrentUserState],
	getInitialState: function(){
		UserStore.setErrors({});
		return {username: "", password: "" };
	},
  usernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  passwordChange: function(e) {
    this.setState({password: e.target.value});
  },
	handleSubmit: function(e){
		e.preventDefault();
		UserActions.signup({username: this.state.username, password: this.state.password});
    // if (this.state.user) {
    //   HashHistory.push("/" + this.state.user.username);
    // } else {
    //   this.setState({errors: this.state.errors});
    // }
	},
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},
	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},
	errors: function(){
		if (!this.state.errors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.errors).map(function(key, i){
				return (<li key={i}>{self.state.errors[key]}</li>);
			})
		}
		</ul>);
	},
	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSubmit} className="form">
					<section>
						<label> Username:
							<input
                type="text"
                placeholder="username"
                onChange={this.usernameChange}
                value={this.state.username}/>
						</label>

						<label> Password:
							<input
                type="password"
                placeholder="password"
                onChange={this.passwordChange}
                value={this.state.password}/>
						</label>
					</section>

					<input type="Submit" value="Sign Up!"/>
				</form>
		);
	},
	loginDemo:function (e) {
		UserActions.demoLogin();
	},
	demoButton: function() {
		return <button id="demo_login" onClick={this.loginDemo}>Demo Account</button>;
	},
	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
				{this.demoButton()}
			</div>
		);
	}
});

module.exports = NewUserForm;
