var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var AlbumActions = require("../../actions/album_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoIndex = require("../photos/photo_index");



var AlbumDetail = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function() {
    console.log("ALBUM DETAIL MOUNTED");
    this.listener = PhotoStore.addListener(this.updateView);
    PhotoActions.fetchPhotos(this.props.params.album_id);
  },

  updateView: function() {
    this.setState({ photos: PhotoStore.all() });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ photos: newProps.photo});
  },
  openCloudinaryWidget: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, photos) {
        if (error === null) {
          var payload = { photos: photos, album_id: this.props.params.album_id };
          PhotoActions.createPhotos(payload);
        } else {

        }
    }.bind(this));
  },

  deleteAlbum: function (e) {
    e.preventDefault();


    var deleteAlbum = confirm("Are you sure you want to delete this album?");
    if (deleteAlbum) {
      AlbumActions.deleteAlbum(this.props.params.album_id);
    }
  },

  noPhotos: function () {
    console.log(this.state.photos);
    if (this.state.photos.length === 0) {
      return (
        <div>
          <p>Looks like there are no photos in this album.</p>
          <button onClick={this.openCloudinaryWidget}>Add some more?</button>
        </div>
      );
    }
  },

  render: function(){
    return (
      <div className="album-detail">
        <button onClick={this.openCloudinaryWidget}>Upload Photos</button>
        <button onClick={this.deleteAlbum}>Delete Album</button>
        <div>
          {this.noPhotos()}
          <PhotoIndex photos={this.state.photos} />
        </div>
      </div>
    );
  }
});

module.exports = AlbumDetail;
