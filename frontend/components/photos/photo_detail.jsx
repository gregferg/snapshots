var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoInformation = require("./photo_information");
var Link = require('react-router').Link;



var mouseStopped = function() {
  $('.shown-on-mouse-move').css('display', 'none');
};

var PhotoDetail = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photo: PhotoStore.photoDetail(this.props.params.photo_id) };
  },
  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this.updateView);
    var timer;
    window.addEventListener( "keyup", this.newPhotoView);
    window.addEventListener( "mousemove", function(e) {

      $('.shown-on-mouse-move').css('display', 'flex');
      clearTimeout(timer);
      timer=setTimeout(mouseStopped, 3000);
    });
    PhotoActions.fetchPhotos(this.props.params.album_id);
  },

  updateView: function() {
    this.setState({ photo: PhotoStore.photoDetail(this.props.params.photo_id) });
  },

  componentWillUnmount: function() {
    this.listener.remove();
    window.removeEventListener("keyup", this.newPhotoView);
    window.removeEventListener("mousemove", this.mouseStopped);
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ photo: PhotoStore.photoDetail(newProps.params.photo_id) });
  },
  photoUrl: function() {
    if (this.state.photo) { return this.state.photo.photo_url; }
  },
  onClose: function() {
    HashHistory.push("/" + this.props.params.username + "/" + this.props.params.album_id);
  },
  nextPhoto: function(e) {

    HashHistory.push(
      "/" + this.props.params.username +
      "/" + this.props.params.album_id +
      "/" + PhotoStore.nextPhoto(this.state.photo.id).id
    );
  },
  previousPhoto: function(e) {
    e.preventDefault();

    HashHistory.push(
      "/" + this.props.params.username +
      "/" + this.props.params.album_id +
      "/" + PhotoStore.previousPhoto(this.state.photo.id).id
    );
  },
  newPhotoView: function(e) {
    if (e.keyCode === 37) {
      this.previousPhoto(e);
    } else if (e.keyCode === 39){
      this.nextPhoto(e);
    } else if (e.keyCode === 27) {
      this.onClose();
    }
  },
  renderPhotoInformation: function () {
    if (!this.state.photo) { return ;}

    return <PhotoInformation photo={this.state.photo} username={this.props.params.username}/>;
  },

  render: function(){
    return (
      <div className="photo-detail">
        <div className="img">
          <img src={this.photoUrl()} />
          {this.renderPhotoInformation()}
        </div>
          <div className="next-photo shown-on-mouse-move" onClick={this.nextPhoto}>Next Photo</div>
          <div className="previous-photo shown-on-mouse-move" onClick={this.previousPhoto}>Previous Photo</div>
          <div className="close-detail-view shown-on-mouse-move" onClick={this.onClose}>Close View</div>
      </div>
    );
  }
});

module.exports = PhotoDetail;
