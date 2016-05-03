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
    console.log(this.props);
    var self = this;
    var albums = this.props.albums.map(function(album) {
      return <AlbumIndexItem key={album.id} album={album} username={self.props.username} currentUser={self.props.currentUser}/>;
    });
    return (
      <div className="album_index photo-content">
        <div>
          {albums}
        </div>
      </div>
    );
  }
});

module.exports = AlbumIndex;
