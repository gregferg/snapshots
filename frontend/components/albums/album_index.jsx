var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var HashHistoryLocation = require('react-router').HashLocation;
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var AlbumIndexItem = require("./album_index_item");



var AlbumIndex = React.createClass({
  componentWillReceiveProps: function(newProps) {
    this.setState({ albums: newProps.albums });
  },



  render: function(){
    var albums = this.props.albums.map(function(album) {
      return <AlbumIndexItem key={album.id} album={album} />;
    });
    return (
      <div className="album_index">
        <p>{this.props.username}s Albums!</p>
        <div>
          {albums}
        </div>
      </div>
    );
  }
});

module.exports = AlbumIndex;
