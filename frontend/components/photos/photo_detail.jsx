var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");
var Link = require('react-router').Link;



var PhotoDetail = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photo: PhotoStore.photoDetail(this.props.params.photo_id) };
  },

  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this.updateView);
    PhotoActions.fetchPhotos(this.props.params.album_id);
  },

  updateView: function() {
    console.log("updated view");
    this.setState({ photo: PhotoStore.photoDetail(this.props.params.photo_id) });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ photo: PhotoStore.photoDetail(newProps.params.photo_id) });
  },
  photoUrl: function() {
    if (this.state.photo) { return this.state.photo.photo_url; }
  },
  photoTitle: function() {
    if (this.state.photo) {
      if (this.state.title === "") { return "untitled"; }
      return this.state.photo.title;
    }
  },
  photoDescription: function() {
    if (this.state.photo) { return this.state.photo.description; }
  },
  onClose: function(e) {
    e.preventDefault();

    HashHistory.push("/" + this.props.params.username + "/" + this.props.params.album_id);
  },
  nextPhoto: function(e) {
    e.preventDefault();

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

  render: function(){
    console.log(this.state.photo);
    return (
      <div className="photo-detail">
        <img src={this.photoUrl()} />
        <div className="photo-information">
          <p>{this.photoTitle()}</p>
          <p>{this.photoDescription()}</p>
        </div>
        <button onClick={this.onClose}>Close View</button>
        <button onClick={this.nextPhoto}>Next Photo</button>
        <button onClick={this.previousPhoto}>Previous Photo</button>
      </div>
    );
  }
});

module.exports = PhotoDetail;
