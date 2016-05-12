var React = require('react');
var UserActions = require("../../actions/user_actions");
var Modal = require('react-modal');
var ModalStyle = require('./modal_style');
var AddAlbumForm = require('./add_album_form');
var AlbumStore = require('../../stores/album_store');
var PhotoActions = require("../../actions/photo_actions");




var AddAlbum = React.createClass({
  getInitialState: function () {
    return ({ modalOpen: false });
  },
  componentDidMount: function() {
    this.listener = AlbumStore.addListener(this.albumCreated);

    this.albumCount = AlbumStore.all().length;
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  albumCreated:function () {
    if (AlbumStore.all().length > this.albumCount){
      this.onModalClose();
    }
    this.albumCount = AlbumStore.all().length;
  },
  addAlbum: function(e) {
    e.preventDefault();
  },
  __handleClick: function() {
    this.setState({ modalOpen: true });
  },

  onModalClose: function() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },
  onModalOpen: function () {
    ModalStyle.content.opacity = 100;
    this.openCloudinaryWidget();
  },
  openCloudinaryWidget: function (e) {
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, photos) {
        if (error === null) {
          var photosToUpload = photos;
          PhotoActions.updatePhotosToUpload(photosToUpload);
          // var payload = { photos: photos, album_id: this.props.params.album_id };
          // PhotoActions.createPhotos(payload);
        } else {

        }
    }.bind(this));
  },
  render: function(){
    return (
      <div className="add-album-div">
        <button className="add-album" onClick={this.__handleClick}>Add Album</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <button onClick={this.onModalClose}>Close</button>
          <AddAlbumForm demoAccount={this.props.demoAccount} user={this.props.user}/>

        </Modal>
      </div>
    );
  }
});

module.exports = AddAlbum;
