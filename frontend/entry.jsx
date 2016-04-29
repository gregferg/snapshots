var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
var LoginForm = require('./components/login_form');
var NewUserForm = require('./components/new_user_form');
var HomePage = require('./components/home_page');
var NavBar = require('./components/nav_bar/nav_bar');
var CurrentUserState = require("./mixins/current_user_state");
var Modal = require('react-modal');
var PhotoIndex = require('./components/photos/photo_index');


var App = React.createClass({
  mixins: [CurrentUserState],

  render: function () {
    console.log(this.props.location.pathname);
    window.path = this.props.location.pathname;
    var homepage ;
    if (this.props.location.pathname === "/") {
      homepage = true;
    }

    return(
    <div>
      <NavBar isHomePage={homepage} user={this.state.user}/>
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
    <Route path=":username/:album_id" component={PhotoIndex} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(
  <Router history={HashHistory}>{routes}</Router>,
  document.getElementById('root')
  );
});
