var React = require('react');
var HashHistory = require('react-router').hashHistory;
var PhotoStore = require("../../stores/album_store");
var PhotoActions = require("../../actions/photo_actions");


var PhotoIndexItem = React.createClass({
  onClick: function(e) {
    //HashHistory.push(window.path + "/" + this.props.album.id)
  },
  deletePhoto: function(e) {
    e.preventDefault();

    PhotoActions.deletePhoto(this.props.photo);
  },

  render: function(){
    return (
      <div onClick={this.onClick} className="photo-index-item">
        <img src={this.props.photo.photo_url} />
        <div className="photo-information">
          <p>Title: {this.props.photo.title}</p>
          <p>Description: {this.props.photo.description}</p>
          <button onClick={this.deletePhoto}>Delete Photo</button>
        </div>
      </div>
    );
  }
});

module.exports = PhotoIndexItem;
