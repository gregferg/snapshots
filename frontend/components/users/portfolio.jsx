var React = require('react');
var AlbumIndex = require('../albums/album_index');
var AlbumStore = require('../../stores/album_store');
var PhotoStore = require('../../stores/photo_store');
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
    AlbumActions.fetchAlbums(this.props.params.username);
    PhotoStore.clearPhotos();
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
        <div className="photo-content">
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
  demoAccount: function() {
    if (!this.state.user) { return ;}
    // debugger;
    if (
      this.props.params.username === "Demo" ||
      this.props.params.username === "" ||
      this.props.params.username === ""
    ) { return true; }
  },

  render: function(){
    return (
      <div className="">
        <div className="portfolio-welcome photo-content">
          <h2>All Albums</h2>
        </div>
        <AlbumIndex
          albums={this.state.albums}
          username={this.props.params.username}
          currentUser={this.currentUser()}
          demoAccount={this.demoAccount()}/>
        {this.noAlbums()}
      </div>
    );
  }
});

module.exports = Portfolio;
