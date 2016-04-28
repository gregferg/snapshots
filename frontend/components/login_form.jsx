var React = require("react");
var UserActions = require("../actions/user_actions");
var UserStore = require('../stores/user_store');
var HashHistory = require('react-router').hashHistory;


var LoginForm = React.createClass({
	getInitialState: function(){
		return {username: "", password: "" };
	},
  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateErrors);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
	updateErrors: function(){
		this.setState({errors: UserStore.errors() });
	},
  usernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  passwordChange: function(e) {
    this.setState({password: e.target.value});
  },
	handleSubmit: function(e){
		e.preventDefault();
		UserActions.login(this.state.username, this.state.password);
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
	onChange: function(){

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
						<br/>

						<label> Password:
							<input
                type="password"
                placeholder="password"
                onChange={this.passwordChange}
                value={this.state.password}/>
						</label>
					</section>
					<br/>

					<input type="Submit" value="Submit"/>
				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
