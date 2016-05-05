var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var Link = require('react-router').Link;



var AlbumIndexItem = React.createClass({
  onClick: function(e) {
    HashHistory.push("/" + this.props.username + "/" + this.props.album.id);
  },
  deleteAlbum: function (e) {
    e.preventDefault();

    var deleteAlbum = confirm("Are you sure you want to delete " + this.props.album.title);
    if (deleteAlbum) {
      AlbumActions.deleteAlbum(this.props.album.id);
    }
  },
  currentUserCanEdit: function() {
    if (this.props.currentUser) {
      return <div className="delete-album" onClick={this.deleteAlbum}>Delete Album</div>;
    }
  },
  albumTitle: function() {
    return (
      <div className="album-info">
        <p>{this.props.album.title}</p>
      </div>
  );
  },

  render: function(){
    console.log(this.props.height);
    console.log(this.props.width);
    return (
      <div className="album-index-item" style={{height: Math.floor(this.props.height), width: this.props.width}}>
        <img
          src={this.props.album.thumbnail_url}
          onClick={this.onClick}/>
        {this.albumTitle()}
        {this.currentUserCanEdit()}
      </div>
    );
  }
});

  module.exports = AlbumIndexItem;
