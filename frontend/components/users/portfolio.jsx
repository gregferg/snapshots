var React = require('react');
var AlbumIndex = require('../albums/album_index');
var AlbumStore = require('../../stores/album_store');
var PhotoStore = require('../../stores/photo_store');
var UserStore = require('../../stores/user_store');
var AlbumActions = require("../../actions/album_actions");
var UserActions = require("../../actions/user_actions");
var AddAlbum = require("../albums/add_album");


var retrivedAlbums;

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      albums: AlbumStore.all(),
      user: UserStore.currentUser()
    };
  },
  componentDidMount: function() {
    this.albumListener = AlbumStore.addListener(this.updateAlbums);
    this.userListener = UserStore.addListener(this.updateUser);

    AlbumActions.fetchAlbums(this.props.params.username);
    if (!UserStore.currentUser()) {
      UserActions.fetchCurrentUser();
    }

    if (AlbumStore.all().length === 0) { retrivedAlbums = false; }
  },
  updateUser: function() {
    this.setState({
      user: UserStore.currentUser(),
      errors: UserStore.errors()
    });
  },
  updateAlbums: function() {
    retrivedAlbums = true;

    this.setState({
      albums: AlbumStore.all()
    });
  },

  componentWillUnmount: function() {
    this.albumListener.remove();
    this.userListener.remove();
    AlbumStore.clearAlbums();
  },

  noAlbums: function () {
    if (!retrivedAlbums) { return <div className="loading"></div>; }
    if (this.state.albums.length === 0) {
      if (this.currentUser()) {
        return (
          <div className="photo-content">
            <p>Looks like you have no albums.</p>
            <AddAlbum user={this.state.user}/>
          </div>
        );
      } else {
        return (
          <div className="photo-content">
            <p>This user has no albums yet.</p>
          </div>
        );
      }
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
    return (
      <div className="">
        <div className="portfolio-welcome photo-content">
          <h2>All Albums</h2>
        </div>
        <AlbumIndex
          albums={this.state.albums}
          username={this.props.params.username}
          currentUser={this.currentUser()}/>
        {this.noAlbums()}
      </div>
    );
  }
});

module.exports = Portfolio;
