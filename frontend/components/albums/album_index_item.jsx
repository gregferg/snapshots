var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var Link = require('react-router').Link;



var AlbumIndexItem = React.createClass({
  onClick: function(e) {
    HashHistory.push(window.path + "/" + this.props.album.id);
  },

  render: function(){
    return (
      <div onClick={this.onClick} className="album-index-item">
        <img src="http://also.kottke.org/misc/images/joy-division-unknown-pleasures.jpg" />
        <p>Title: {this.props.album.title}</p>
        //<p>Photo Count: {this.props.album.photos.length}</p>
      </div>
    );
  }
});

  module.exports = AlbumIndexItem;
