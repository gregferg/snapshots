var React = require('react');
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var PhotoStore = require("../../stores/photo_store");
var PhotoActions = require("../../actions/photo_actions");
var PhotosToUpload = require("../photos/photos_to_upload");
var Modal = require('react-modal');
var ModalStyle = require('./delete_modal_style');
var CannotDelete = require('../users/cannot_delete_modal');



var AddAlbumForm = React.createClass({
  getInitialState: function() {
    return { title: "", description: "", image_url: "", modalOpen: false};
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
    this.listener = AlbumStore.addListener(this.updateErrors);

    this.setState({ errors: {} });
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  updateErrors: function(){
    this.setState({errors: AlbumStore.errors() });
  },

  updateView: function() {
    this.setState({ title: "", description: "" });
  },

  titleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  descriptionChange: function (e) {
    this.setState({ description: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    AlbumActions.createAlbum({
      title: this.state.title,
      description: this.state.description,
      user_id: this.props.user.id,
      photos_to_upload: PhotoStore.photosToUpload()
    });
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
          <label> Title:
            <input
              type="text"
              placeholder="Title"
              onChange={this.titleChange}
              value={this.state.title}/>
          </label>

          <br />

          <label> Description:
            <input
              type="text"
              placeholder="Description"
              onChange={this.descriptionChange}
              value={this.state.description}/>
          </label>
          <PhotosToUpload />
          <br/>
          <div id='my-widget-container'>

          </div>
          <br />

          <input className="add-photos" type="submit" value="Add Album"/>
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

module.exports = AddAlbumForm;
