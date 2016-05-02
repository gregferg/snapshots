var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var Link = require('react-router').Link;
var PhotosToUpload = require("./photos_to_upload");




var UploadPhotoForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this.updateView);
    PhotoActions.fetchPhotos();
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
  handleSubmit: function (e) {
    e.preventDefault();

    this.props.closeModal();
    PhotoActions.createPhotos({
      photos: PhotoStore.photosToUpload(),
      album_id: this.props.albumId
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
          <PhotosToUpload />
          <br/>
          <div id='my-widget-container'>

          </div>
          <br />

          <input type="submit" value="Upload Photos"/>
        </form>
      </div>
    );
  }
});

module.exports = UploadPhotoForm;
