var React = require('react');
var AlbumIndex = require('../albums/album_index');
var AlbumStore = require('../../stores/album_store');
var AlbumActions = require("../../actions/album_actions");
var AddAlbum = require("../albums/add_album");
var CurrentUserState = require("../../mixins/current_user_state");



var Portfolio = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { albums: AlbumStore.all() };
  },
  componentDidMount: function() {
    this.listener = AlbumStore.addListener(this.updateAlbums);
    AlbumActions.fetchAlbums(this.props.params.username);
  },
  updateAlbums: function() {
    this.setState({ albums: AlbumStore.all() });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  noAlbums: function () {
    if (this.state.albums.length === 0) {
      return (
        <div>
          <p>Looks like you have no albums.</p>
          <AddAlbum />
        </div>
      );
    }
  },
  currentUser: function() {
    if (!this.state.user) { return; }
    var currentSiteUsername = this.props.params.username;
    var currentUsername = this.state.user.username;
    if (currentSiteUsername === currentUsername) {
      return true;
    }
  },

  render: function(){
    console.log(this.props.params);
    return (
      <div className="content">
        <div className="portfolio-welcome">
          <h2>{this.props.params.username}s Portfolio </h2>
        </div>
        <AlbumIndex albums={this.state.albums} username={this.props.params.username} currentUser={this.currentUser()}/>
        {this.noAlbums()}
      </div>
    );
  }
});

module.exports = Portfolio;
