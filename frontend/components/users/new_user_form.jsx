var React = require("react");
var UserActions = require("../../actions/user_actions");
var CurrentUserState = require("../../mixins/current_user_state");
var UserStore = require('../../stores/user_store');


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
		UserActions.signup({
			username: this.state.username,
			password: this.state.password
			});
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
		return (<ul className="errors">
		{
			Object.keys(this.state.errors).map(function(key, i){
				return (<li key={i}>{self.state.errors[key]}</li>);
			})
		}
		</ul>);
	},
	doNothing: function () {
		// removes failed form proptype warning saying that setting a value without
		// giving an onChange handler is not valid
	},
	form: function(){
		if (this.state.currentUser) {
			return;
		}

		return(
			<div>
				<h1 className="login-form-title">Sign Up</h1>
				<form onSubmit={this.handleSubmit} className="form">
					<div>
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

						<div className="submit-buttons">
							<input
								onChange={this.doNothing}
								className="signup-button"
								type="Submit"
								value="Sign Up!"/>


							<button
								id="demo_login"
								onClick={this.loginDemo}>
								Demo Account
							</button>
						</div>
					</div>

				</form>
				{this.errors()}

			</div>
		);
	},
	loginDemo:function (e) {
		e.preventDefault();

		UserActions.demoLogin();
	},
	render: function(){
		return (
			<div id="signup-form">
				{this.greeting()}
				{this.form()}
			</div>
		);
	}
});

module.exports = NewUserForm;
