var React = require('react');
var HashHistory = require('react-router').hashHistory;
var PhotoStore = require("../../stores/album_store");
var PhotoActions = require("../../actions/photo_actions");
var PhotoEditForm = require("./photo_edit_form");


var PhotoIndexItem = React.createClass({
  getInitialState: function () {
    return { editForm: false };
  },
  deletePhoto: function(e) {
    e.preventDefault();

    PhotoActions.deletePhoto(this.props.photo);
  },

  onClick: function(e) {
    e.preventDefault();

    if (e.target === "img") {
      HashHistory.push(window.path + "/" + this.props.photo.id);
    }
    HashHistory.push(window.path + "/" + this.props.photo.id);
    
  },

  toggleEdit: function(e) {
    e.preventDefault();

    this.setState({ editForm: !this.state.editForm });
  },
  titleAndDescription: function() {
    if (this.state.editForm) {
      return <PhotoEditForm photo={this.props.photo} />;
    } else {
      return (
        <div>
          <p>Title: {this.props.photo.title}</p>
          <p>Description: {this.props.photo.description}</p>
        </div>
      );
    }

  },
  currentUserCanEdit: function() {
    if (this.props.currentUser) {
      return (
        <div>
          <button onClick={this.deletePhoto}>Delete Photo</button>
          <button onClick={this.toggleEdit}>Edit Photo</button>
        </div>
      );
    }
  },

  render: function(){
    return (
      <div onClick={this.onClick} className="photo-index-item">
        <img src={this.props.photo.photo_url} />
        <div className="photo-information">
          {this.titleAndDescription()}
          {this.currentUserCanEdit()}
        </div>
      </div>
    );
  }
});

module.exports = PhotoIndexItem;
