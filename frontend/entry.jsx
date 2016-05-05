var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
var LoginForm = require('./components/users/login_form');
var NewUserForm = require('./components/users/new_user_form');
var NavBar = require('./components/nav_bar/nav_bar');
var SiteNavBar = require('./components/site_nav_bar/site_nav_bar');
var CurrentUserState = require("./mixins/current_user_state");
var Modal = require('react-modal');
var PhotoIndex = require('./components/photos/photo_index');
var AlbumDetail = require('./components/albums/album_detail');
var PhotoDetail = require('./components/photos/photo_detail');
var AboutPage = require('./components/users/about_page');
var ContactPage = require('./components/users/contact_page');
var HomePage = require('./components/users/home_page');
var Portfolio = require('./components/users/portfolio');


var App = React.createClass({
  mixins: [CurrentUserState],
  lookingAtUser: function() {
    var params = this.props.params;

    if (params.album_id && !params.photo_id || params.username && !params.photo_id) {
      return true;
    }
  },
  site_nav_bar: function () {
    console.log(this.props);
    if (this.lookingAtUser()) {
      return <SiteNavBar url={this.props.location.pathname} params={this.props.params} username={this.props.params.username}/>;
    }
  },
  displayNavBar: function() {
    if (this.props.params.photo_id) {return ;}

    window.path = this.props.location.pathname;
    var homepage ;
    if (this.props.location.pathname === "/") {
      homepage = true;
    }

    return <NavBar isHomePage={homepage} user={this.state.user}/>;
  },

  render: function () {
    return(
    <div>
      {this.displayNavBar()}
      {this.site_nav_bar()}
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
    <Route path=":username/portfolio" component={Portfolio} />
    <Route path=":username/about" component={AboutPage} />
    <Route path=":username/contact" component={ContactPage} />
    <Route path=":username/:album_id" component={AlbumDetail} />
    <Route path=":username/:album_id/:photo_id" component={PhotoDetail} />

  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(
  <Router history={HashHistory}>{routes}</Router>,
  document.getElementById('root')
  );
});
