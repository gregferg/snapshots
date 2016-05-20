var React = require('react');
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var AlbumActions = require("../../actions/album_actions");
var UserActions = require("../../actions/user_actions");
var PhotoStore = require("../../stores/photo_store");
var AlbumStore = require("../../stores/album_store");
var PhotoIndex = require("../photos/photo_index");
var UploadPhotos = require("../photos/upload_photos");
var Modal = require('react-modal');
var ModalStyle = require('./delete_modal_style');
var CannotDelete = require('../users/cannot_delete_modal');
var UserStore = require('../../stores/user_store');

var retrivedPhotos;

var AlbumDetail = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all(),
      modalOpen: false,
      user: UserStore.currentUser()
     };
  },
  onModalClose: function() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },
  onModalOpen: function () {
    this.setState({ modalOpen: true });
    ModalStyle.content.opacity = 100;
  },

  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.updateView);
    this.albumListener = AlbumStore.addListener(this.updateAlbum);
    this.userListener = UserStore.addListener(this.updateUser);

    if (!UserStore.currentUser()) {
      UserActions.fetchCurrentUser();
    }
    if (PhotoStore.all().length === 0) { retrivedPhotos = false; }


    AlbumActions.fetchAlbum(this.props.params.album_id);
    PhotoActions.fetchPhotos(this.props.params.album_id);
  },

  updateUser: function() {
    this.setState( {user: UserStore.currentUser()} );
  },

  updateView: function() {
    retrivedPhotos = true;
    this.setState({ photos: PhotoStore.all() });
  },

  componentWillUnmount: function() {
    this.photoListener.remove();
    this.albumListener.remove();
    this.userListener.remove();
  },

  updateAlbum: function() {
    this.setState({ album: AlbumStore.currentAlbum() });
  },

  albumTitle: function() {
    if (!this.state.album) { return ; }

    return this.state.album.title;
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
          var photosToUpload = {
            photos: photos,
            album_id: this.props.params.album_id
          };
          PhotoActions.updatePhotosToUpload(photosToUpload);
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
          <UploadPhotos
            albumId={this.props.params.album_id}/>
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
    if (!this.state.photos || !retrivedPhotos) { return; }
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
    if (!this.state.user) { return false;}


    var currentSiteUsername = this.props.params.username;
    var currentUsername = this.state.user.username;
    if (currentSiteUsername === currentUsername) {
      return true;
    }
  },

  render: function(){
    return (
      <div className="photo-content">
        <div className="album-detail">
          <div className="album-headers">
            <h2>{this.albumTitle()}</h2>
            <div className="album-options">
              {this.canEditAlbum()}
            </div>
          </div>
          <div>
            {this.noPhotos()}
            <PhotoIndex
              photos={this.state.photos}
              currentUser={this.currentUser()}
              modalOpen={this.onModalOpen}/>
          </div>


          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>

            <div className="modal-content">
              <button onClick={this.onModalClose}>Close</button>
              <CannotDelete />
            </div>

          </Modal>
        </div>
      </div>
    );
  }
});

module.exports = AlbumDetail;
