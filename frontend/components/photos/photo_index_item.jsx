var React = require('react');
var HashHistory = require('react-router').hashHistory;
var PhotoStore = require("../../stores/album_store");


var PhotoIndexItem = React.createClass({
  onClick: function(e) {
    //HashHistory.push(window.path + "/" + this.props.album.id)
  },

  render: function(){
    return (
      <div onClick={this.onClick} className="album-index-item">
        <img src="http://also.kottke.org/misc/images/joy-division-unknown-pleasures.jpg" />
        <div>
          <p>Title: {this.props.photo.title}</p>
          <p>Description: {this.props.photo.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = PhotoIndexItem;
