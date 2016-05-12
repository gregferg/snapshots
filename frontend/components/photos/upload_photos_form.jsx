var React = require('react');
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotosToUpload = require("./photos_to_upload");
var Modal = require('react-modal');
var ModalStyle = require('../albums/delete_modal_style');
var CannotDelete = require('../users/cannot_delete_modal');


var UploadPhotoForm = React.createClass({
  getInitialState: function() {
    return { photos: PhotoStore.all(), modalOpen: false };
  },
  componentDidMount: function() {
    this.setState({ errors: {} });
  },
  onModalClose: function() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },
  onModalOpen: function () {
    this.setState({ modalOpen: true });
    ModalStyle.content.opacity = 100;
  },
  handleSubmit: function (e) {
    e.preventDefault();

    if (this.props.demoAccount) {
      this.onModalOpen();
    } else {
      this.props.closeModal();
      PhotoActions.createPhotos({
        photos: PhotoStore.photosToUpload(),
        album_id: this.props.albumId
      });
    }
  },

  errors: function(){
    if (!this.state.errors){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(this.state.errors).map(function(key, i){
        return (<li key={i}>{self.state.errors[key]}</li>);
      })
    }
    </ul>);
  },

  render: function(){
    return (
      <div className="">
        {this.errors()}
        <form onSubmit={this.handleSubmit}>
          <PhotosToUpload />
          <br/>
          <div id='my-widget-container'>

          </div>
          <br />

          <input className="add-photos" type="submit" value="Upload Photos"/>
        </form>

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
    );
  }
});

module.exports = UploadPhotoForm;
