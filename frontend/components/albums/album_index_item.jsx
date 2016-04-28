var React = require('react');
      var CurrentUserState = require("../../mixins/current_user_state");
      var HashHistory = require('react-router').hashHistory;
      var AlbumActions = require("../../actions/album_actions");
      var AlbumStore = require("../../stores/album_store");
      var Link = require('react-router').Link;



      var AlbumIndexItem = React.createClass({

        render: function(){
          return (
            <div className="AlbumIndexItem">
              <p>Title: {this.props.album.title}</p>
              <p>Photo Count: {this.props.album.photos.length}</p>
            </div>
          );
        }
      });

      module.exports = AlbumIndexItem;
