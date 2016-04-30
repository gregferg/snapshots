var React = require('react');
var AlbumIndex = require('./albums/album_index');
var AlbumStore = require('../stores/album_store');
var AlbumActions = require("../actions/album_actions");
var AddAlbum = require("./albums/add_album");



var HomePage = React.createClass({
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
    console.log(this.state.albums);
    console.log(this.state);
    if (this.state.albums.length === 0) {
      return (
        <div>
          <p>Looks like you have no albums.</p>
          <AddAlbum />
        </div>
      );
    }
  },

  render: function(){
    return (
      <div>
        <p> Welcome to {this.props.params.username}s homepage </p>
        <AlbumIndex albums={this.state.albums} username={this.props.params.username}/>
        {this.noAlbums()}
      </div>
    );
  }
});

module.exports = HomePage;
