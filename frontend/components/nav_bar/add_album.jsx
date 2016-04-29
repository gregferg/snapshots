 var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var UserActions = require("../../actions/user_actions");
var Link = require('react-router').Link;
var SearchBar = require('./search_bar');
var Modal = require('react-modal');
var ModalStyle = require('./modal_style');
var AddAlbumForm = require('./add_album_form');



var AddAlbum = React.createClass({
  getInitialState: function () {
    return ({ modalOpen: false });
  },

  addAlbum: function(e) {
    e.preventDefault();

  },
  __handleClick: function() {
    this.setState({ modalOpen: true });
  },
  onModalClose: function() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },
  onModalOpen: function () {
    ModalStyle.content.opacity = 100;
  },
  render: function(){
    return (
      <div>
        <button className="add-album" onClick={this.__handleClick}>Add Album</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <button onClick={this.onModalClose}>Close</button>
          <AddAlbumForm onFormSubmit={this.onModalClose}/>
        </Modal>
      </div>
    );
  }
});

module.exports = AddAlbum;
