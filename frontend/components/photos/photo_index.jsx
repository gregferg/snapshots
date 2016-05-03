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
    if (!this.state.photos) { return ; }
    var self = this;
    var photos;
    var photoRows = [];

    photos = this.state.photos.map(function(photo) {
      return <PhotoIndexItem key={photo.id} photo={photo} currentUser={self.props.currentUser} />;
    });

    var testPhotoRow = (
      <div className="photo-row">
        {photos[0]}
        {photos[1]}
        {photos[2]}
      </div>
    );


    return (
      <div className="photo-index">
        {photos}
      </div>
    );
  }
});

module.exports = PhotoIndex;
