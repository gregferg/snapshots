var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
var LoginForm = require('./components/login_form');
var NewUserForm = require('./components/new_user_form');
var HomePage = require('./components/home_page');
var NavBar = require('./components/nav_bar/nav_bar');


var App = React.createClass({
  render: function () {
    return(
    <div>
      <NavBar />
      {this.props.children}
    </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <Route path="new_user" component={NewUserForm} />
    <Route path="login" component={LoginForm} />
    <Route path=":username" component={HomePage} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
  <Router history={HashHistory}>{routes}</Router>,
  document.getElementById('root')
  );
});
