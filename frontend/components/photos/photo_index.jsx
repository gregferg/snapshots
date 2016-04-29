var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoIndexItem = require("./photo_index_item");



var PhotoIndex = React.createClass({
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
    console.log(window.cloudinary_options);
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        console.log(error);
        console.log(images);
        if (error === null) {
          //upload(images)
        } else {

        }
    });
  },

  render: function(){
    var photos = this.state.photos.map(function(photo) {
      return <PhotoIndexItem key={photo.id} photo={photo} />;
    });
    return (
      <div className="photo-index">
        <button onClick={this.openCloudinaryWidget}>Upload Photos (CURRENTLY DOESN"T ACTUALLY SAVE THEM TO DB)</button>
        <div className="photo-index1">
          {photos}
        </div>
      </div>
    );
  }
});

module.exports = PhotoIndex;
