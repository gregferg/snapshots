var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var AlbumActions = require("../../actions/album_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoIndex = require("../photos/photo_index");
var UploadPhotos = require("../photos/upload_photos");



var AlbumDetail = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function() {
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
          var photosToUpload = { photos: photos, album_id: this.props.params.album_id };
          PhotoActions.updatePhotosToUpload(photosToUpload);

          // var payload = { photos: photos, album_id: this.props.params.album_id };
          // PhotoActions.createPhotos(payload);
        } else {

        }
    }.bind(this));
  },

  closeAlbum: function (e) {
    e.preventDefault();

    HashHistory.push("/" + this.props.params.username);
  },

  canEditAlbum: function() {
    if (this.currentUser()) {
      return (
        <div>
          <button onClick={this.deleteAlbum}>Delete Album</button>
          <UploadPhotos albumId={this.props.params.album_id}/>
        </div>
      );
    }
  },
  deleteAlbum: function (e) {
    e.preventDefault();


    var deleteAlbum = confirm("Are you sure you want to delete this album?");
    if (deleteAlbum) {
      AlbumActions.deleteAlbum(this.props.params.album_id);
    }
  },

  noPhotos: function () {
    if (!this.state.photos) { return; }
    if (this.state.photos.length === 0) {
      return (
        <div>
          <p>Looks like there are no photos in this album.</p>
          <button onClick={this.openCloudinaryWidget}>Add some more?</button>
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


  render: function(){
    return (
      <div className="album-detail">
        <div className="album-options">
        <button onClick={this.closeAlbum}>Back to All Albums</button>
        {this.canEditAlbum()}
      </div>
        <div>
          {this.noPhotos()}
          <PhotoIndex photos={this.state.photos} currentUser={this.currentUser()}/>
        </div>

      </div>
    );
  }
});

module.exports = AlbumDetail;
