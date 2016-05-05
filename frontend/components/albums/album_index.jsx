var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var HashHistoryLocation = require('react-router').HashLocation;
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var AlbumIndexItem = require("./album_index_item");



var AlbumIndex = React.createClass({
  componentWillReceiveProps: function(newProps) {
    this.setState({ albums: newProps.albums });
  },

  calcRow: function (photos) {
    if (photos.length === 0) { return ;}
    // debugger;
    var targetWidth = window.innerWidth * .9;
    var firstHeight = photos[0].height;
    var widths = [photos[0].width];

    for (var i = 0; i < photos.length; i++) {
      if (i !== 0) {

      var unscaledHeight = photos[i].height;
      var unscaledWidth =  photos[i].width;

      var widthScale = firstHeight / unscaledHeight;
      widths.push(unscaledWidth * widthScale);
      }
    }

    var sumWidth = 0;
    for (var i = 0; i < widths.length; i++) {
      sumWidth += widths[i];
    }

    var heightScale = targetWidth / sumWidth;

    var renderHeight = firstHeight * heightScale;

    var renderWidths = [];
    for (var i = 0; i < widths.length; i++) {
      renderWidths.push(Math.floor(widths[i] * heightScale));
    }

    return {renderHeight: renderHeight, renderWidths: renderWidths};
  },
  allocateRows: function(allAlbums) {
    var rowsToRender = [];
    var albums = allAlbums.slice();

    while (albums.length > 0) {
      var tempRowNumber = Math.floor(Math.random() * (4 - 0)) + 1;
      var tempRowNumber = albums.length;
//       debugger;
      var possibleRow = albums.slice(0, tempRowNumber);

      var thumbnails = [];

      possibleRow.forEach(function(album) {
        if (album.photos[0]) {
          thumbnails.push(album.photos[0]);
        } else {
          thumbnails.push({height: 300, width: 400});
        }
      });

      var calculatedRow = this.calcRow(thumbnails);

      if (calculatedRow.renderHeight < 50) {
        continue ;
      }

      var self = this;
      var newRow = possibleRow.map(function(album, idx) {
        return <AlbumIndexItem key={album.id} album={album} username={self.props.username} currentUser={self.props.currentUser} height={calculatedRow.renderHeight} width={calculatedRow.renderWidths[idx]} />;
      });

      albums = albums.slice(tempRowNumber, albums.length);
      rowsToRender.push(newRow);
    }

    return rowsToRender;
  },

  render: function(){
    if (!this.props.albums) {return ;}

    var albums = this.props.albums;

    var rows = this.allocateRows(albums).map(function(row) {
      return (
        <div className="photo-row" >
          {row}
        </div>
      );
    });

    return (
      <div className="album_index photo-content">
        <div>
          {rows}
        </div>
      </div>
    );
  }
});

module.exports = AlbumIndex;
