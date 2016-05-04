var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var AlbumActions = require("../../actions/album_actions");
var PhotoStore = require("../../stores/photo_store");
var PhotoIndexItem = require("./photo_index_item");



var PhotoIndex = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { photos: this.props.photos };
  },
  componentDidMount: function() {
    window.addEventListener("resize", this.reRender);
  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.reRender);
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ photos: newProps.photos});
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
  allocateRows: function(allPhotos) {
    var rowsToRender = [];
    var photos = allPhotos.slice();

    while (photos.length > 0) {
      var tempRowNumber = Math.floor(Math.random() * (4 - 0)) + 1;

      var possibleRow = photos.slice(0, tempRowNumber);

      var calculatedRow = this.calcRow(possibleRow);


      if (calculatedRow.renderHeight < 100) {
        continue ;
      }


      var self = this;
      var newRow = possibleRow.map(function(photo, idx) {
        return <PhotoIndexItem key={photo.id} photo={photo} currentUser={self.props.currentUser} height={calculatedRow.renderHeight} width={calculatedRow.renderWidths[idx]} />;
      });

      photos = photos.slice(tempRowNumber, photos.length);
      rowsToRender.push(newRow);
    }

    console.log(rowsToRender);
    return rowsToRender;
  },
  reRender: function() {
    this.setState({ potato: true});
  },

  render: function(){
    if (!this.state.photos) { return <div></div>; }
    if (this.state.photos.length === 0) { return <div></div>; }
    var photos = this.state.photos;


    var testPhotoRow = [
        photos[0], photos[1]
      ];

    var rows = this.allocateRows(photos).map(function(row) {
      return (
        <div className="photo-row" >
          {row}
        </div>
      );
    });

    return (
      <div className="photo-index" onresize={this.reRender}>
        {rows}
      </div>
    );
  }
});

module.exports = PhotoIndex;
