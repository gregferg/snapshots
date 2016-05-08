var React = require('react');
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");


var PhotosToUpload = React.createClass({
  getInitialState: function() {
    return { photos: PhotoStore.photosToUpload() };
  },

  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this.updateView);
  },

  updateView: function() {
    this.setState({ photos: PhotoStore.photosToUpload() });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  photosToUpload: function() {
    if (!this.state.photos) { return ;}

    return this.state.photos.map(function(photo) {
      return <img src={photo.thumbnail_url} key={photo.thumbnail_url} className="photo-to-upload"/>;
    });
  },

  render: function(){
    return (
      <div>
        <p>Added Photos:</p>
        <div className="photos-to-upload">
          {this.photosToUpload()}
        </div>
      </div>
    );
  }
});

module.exports = PhotosToUpload;
