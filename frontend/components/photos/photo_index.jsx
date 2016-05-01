var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var AlbumActions = require("../../actions/album_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoIndexItem = require("./photo_index_item");



var PhotoIndex = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photos: this.props.photos };
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ photos: newProps.photos});
  },

  render: function(){
    var self = this;
    var photos;
    if (this.state.photos) {
      photos = this.state.photos.map(function(photo) {
        return <PhotoIndexItem key={photo.id} photo={photo} currentUser={self.props.currentUser} />;
      });
    }
    return (
      <div className="photo-index">
        {photos}
      </div>
    );
  }
});

module.exports = PhotoIndex;
