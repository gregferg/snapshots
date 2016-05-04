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
  photoTitle: function() {
    if (this.props.photo) {
      var title = this.props.photo.title;
      if (title === "") { return "untitled"; }
      return this.props.photo.title;
    }
  },
  titleAndDescription: function() {
    if (this.state.editForm) {
      return <PhotoEditForm photo={this.props.photo} />;
    } else {
      return (
        <div className="photo-information">
          <p>{this.photoTitle()}</p>
        </div>
      );
    }

  },
  currentUserCanEdit: function() {

    //to implement later <button onClick={this.toggleEdit}>Edit Photo</button>

    if (this.props.currentUser) {
      return (
        <div className="delete-photo" onClick={this.deletePhoto}>Delete Photo
        </div>
      );
    }
  },

  render: function(){
    return (
      <div onClick={this.onClick} className="photo-index-item" style={{height: Math.floor(this.props.height), width: this.props.width}}>
        <img src={this.props.photo.photo_url} />
        {this.titleAndDescription()}
        {this.currentUserCanEdit()}
      </div>
    );
  }
});

module.exports = PhotoIndexItem;
