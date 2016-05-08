var React = require('react');
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var AlbumIndexItem = require("./album_index_item");
var Modal = require('react-modal');
var ModalStyle = require('./delete_modal_style');
var CannotDelete = require('../users/cannot_delete_modal');


var AlbumIndex = React.createClass({
  getInitialState: function() {
    return ({ modalOpen: false });
  },
  onModalClose: function() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },
  onModalOpen: function () {
    this.setState({ modalOpen: true });
    ModalStyle.content.opacity = 100;
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({ albums: newProps.albums });
  },

  componentDidMount: function() {
    window.addEventListener("resize", this.reRender);
  },
  componentWillUnmount: function() {
    window.removeEventListener("resize", this.reRender);
  },
  reRender: function() {
    //Setting the state so the component will rerender, Why not potato?
    this.setState({ potato: true});
  },

  calcRow: function (photos) {
    if (photos.length === 0) { return ;}

    for (var i = 0; i < 3; i++) {
      if(!photos[i]) {
        photos[i] = {height: 300, width: 400};
      }
    }

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

    //IF MARGINS WANTED
    if (widths.length === 4) {
      targetWidth -= 30;
    } else if (widths.length === 3) {
      targetWidth -= 20;
    } else if (widths.length === 2) {
      targetWidth -= 10;
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
      var possibleRow = albums.slice(0, 3);

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
        return (
          <AlbumIndexItem
            key={album.id}
            album={album}
            username={self.props.username}
            currentUser={self.props.currentUser}
            height={calculatedRow.renderHeight}
            width={calculatedRow.renderWidths[idx]}
            demoAccount={self.props.demoAccount}
            modalOpen={self.onModalOpen}/>
        );
      });

      albums = albums.slice(3, albums.length);
      rowsToRender.push(newRow);
    }

    return rowsToRender;
  },

  render: function(){
    if (!this.props.albums) {return ;}

    var albums = this.props.albums;

    var rows = this.allocateRows(albums).map(function(row, idx) {
      return (
        <div className="photo-row" key={idx}>
          {row}
        </div>
      );
    });

    return (
      <div className="album_index photo-content">
        <div>
          {rows}

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>

            <div className="modal-content">
              <button onClick={this.onModalClose}>Close</button>
              <CannotDelete />
            </div>

          </Modal>
        </div>
      </div>
    );
  }
});

module.exports = AlbumIndex;
