var React = require('react');
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var Modal = require('react-modal');
var ModalStyle = require('../albums/modal_style');
var UploadPhotoForm = require('./upload_photos_form');



var UploadPhotos = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
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
        }
    }.bind(this));
  },

  render: function(){
    return (
      <div>
        <button className="upload-photos" onClick={this.__handleClick}>Upload Photos</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <button onClick={this.onModalClose}>Close</button>
          
          <UploadPhotoForm
            closeModal={this.onModalClose}
            albumId={this.props.albumId}/>
        </Modal>
      </div>
    );
  }
});

module.exports = UploadPhotos;
